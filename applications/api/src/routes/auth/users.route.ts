import { users } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { randomBytes } from "crypto"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { env } from "../../env.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"
import { sendEmail } from "../../services/email/sendEmail.js"
import { invitationTemplate } from "../../services/email/templates/invitation.js"


export const usersRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.users.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createUser] = await db
                .insert(users)
                .values({
                    id: generateId(),
                    idOrganization: c.var.user.idOrganization,
                    isAdmin: body.isAdmin,
                    alias: body.alias,
                    email: body.email,
                    isEmailValidated: true,
                    isActive: true,
                    isInvitationValidated: false,
                    passwordSalt: randomBytes(16).toString('hex'),
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createUser, 200)
        }
    )
    .get(
        "/:idUser?",
        validator("param", paramsValidator(auth.users.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idUser) {
                const readUsers = await db
                    .select()
                    .from(users)
                    .where(eq(users.idOrganization, c.var.user.idOrganization))

                return c.json(readUsers, 200)
            }

            const [readUser] = await db
                .select()
                .from(users)
                .where(and(
                    eq(users.idOrganization, c.var.user.idOrganization),
                    eq(users.id, params.idUser)
                ))

            return c.json(readUser, 200)
        }
    )
    .put(
        '/:idUser',
        validator("param", paramsValidator(auth.users.put.params)),
        validator("json", bodyValidator(auth.users.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateUser] = await db
                .update(users)
                .set({
                    alias: body.alias,
                    email: body.email,
                    isAdmin: body.isAdmin,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(users.idOrganization, c.var.user.idOrganization),
                    eq(users.id, params.idUser)
                ))
                .returning()

            return c.json(updateUser, 200)
        }
    )
    .delete(
        '/:idUser',
        validator("param", paramsValidator(auth.users.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteUser] = await db
                .delete(users)
                .where(and(
                    eq(users.idOrganization, c.var.user.idOrganization),
                    eq(users.id, params.idUser)
                ))
                .returning()

            return c.json(deleteUser, 200)
        }
    )
    .patch(
        "/:idUser/send-invitation",
        validator("param", paramsValidator(auth.users.patch.sendInvitation.params)),
        async (c) => {
            const params = c.req.valid('param')

            const invitationToken = generateId()

            const [updateUser] = await db
                .update(users)
                .set({
                    invitationToken: invitationToken,
                    invitationLastSentOn: new Date().toISOString(),
                    invitationTokenExpiresOn: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(users.idOrganization, c.var.user.idOrganization),
                    eq(users.id, params.idUser),
                    eq(users.isInvitationValidated, false)
                ))
                .returning()

            const urlWebsite = env()?.WEBSITE_BASE_URL
            const urlApp = env()?.APP_BASE_URL
            if (!urlWebsite || !urlApp) throw new HTTPException(500)

            await sendEmail({
                to: updateUser.email,
                subject: "Invitation à collaborer sur Coulba",
                html: invitationTemplate({
                    urlInvitation: `${urlApp}/services/invitation?id=${updateUser.id}&token=${updateUser.invitationToken}`,
                    urlWebsite: urlWebsite
                })
            })

            return c.json({}, 200)
        }
    )
