import { users } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { pbkdf2Sync, randomBytes } from "crypto"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const usersRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.users.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const passwordSalt = randomBytes(16).toString('hex')
            const invitationToken = generateId()
            const passwordHash = pbkdf2Sync(invitationToken, passwordSalt, 128000, 64, `sha512`).toString(`hex`)

            const [createUser] = await db
                .insert(users)
                .values({
                    id: generateId(),
                    idCompany: c.var.user.idCompany,
                    isAdmin: body.isAdmin,
                    forename: body.forename,
                    surname: body.surname,
                    email: body.email,
                    isActive: true,
                    passwordHash: passwordHash,
                    passwordSalt: passwordSalt,
                    invitationToken: invitationToken,
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
                    .where(eq(users.idCompany, c.var.user.idCompany))

                return c.json(readUsers, 200)
            }

            const [readUser] = await db
                .select()
                .from(users)
                .where(eq(users.id, params.idUser))

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
                    forename: body.forename,
                    surname: body.surname,
                    email: body.email,
                    isAdmin: body.isAdmin,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(users.id, params.idUser))
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
                .where(eq(users.id, params.idUser))
                .returning()

            return c.json(deleteUser, 200)
        }
    )
