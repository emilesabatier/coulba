import { sessions, users } from '@coulba/schemas/models'
import { shared } from '@coulba/schemas/routes'
import { generateId } from '@coulba/schemas/services'
import { and, eq, isNotNull, sql } from 'drizzle-orm'
import { Hono } from 'hono'
import { setCookie, setSignedCookie } from 'hono/cookie'
import { HTTPException } from 'hono/http-exception'
import { validator } from 'hono/validator'
import { db } from '../../clients/db.js'
import { env } from '../../env.js'
import { bodyValidator } from '../../middlewares/bodyValidator.js'
import { sendEmail } from '../../services/email/sendEmail.js'
import { resetPasswordTemplate } from '../../services/email/templates/resetPassword.js'


export const usersRoute = new Hono()
    .patch(
        '/reset-password',
        validator("json", bodyValidator(shared.users.patch.resetPassword.body)),
        async (c) => {
            const body = c.req.valid('json')

            const invitationToken = generateId()
            const [updateUser] = await db
                .update(users)
                .set({
                    isInvitationValidated: false,
                    invitationToken: invitationToken,
                    invitationLastSentOn: new Date().toISOString(),
                    invitationTokenExpiresOn: new Date(new Date().getTime() + (24 * 60 * 60 * 1000)).toISOString(),
                    lastUpdatedBy: null,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(users.email, body.email))
                .returning()

            if (!updateUser) throw new HTTPException(200, { message: "" })


            const urlWebsite = env()?.WEBSITE_BASE_URL
            const urlApp = env()?.APP_BASE_URL
            if (!urlWebsite || !urlApp) throw new HTTPException(500)

            await sendEmail({
                to: updateUser.email,
                subject: "Réinitialisation du mot de passe",
                html: resetPasswordTemplate({
                    to: `${updateUser.alias ?? updateUser.email}`,
                    urlInvitation: `${urlApp}/services/invitation?id=${updateUser.id}&token=${updateUser.invitationToken}`
                })
            })
            // const passwordSalt = randomBytes(16).toString('hex')
            // const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)


            return c.json({}, 200)
        }
    )
    .patch(
        '/validate-invitation',
        validator("json", bodyValidator(shared.users.patch.validateInvitation.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [readUser] = await db
                .select()
                .from(users)
                .where(and(
                    eq(users.id, body.id),
                    eq(users.invitationToken, body.invitationToken)
                ))
            if (!readUser) throw new HTTPException(403, { message: "Invitation non trouvée" })

            const currentDate = new Date()
            const sessionLifetime = Number(env()?.SESSION_LIFETIME)
            const cookiesKey = env()?.COOKIES_KEY
            if (!sessionLifetime || !cookiesKey) throw new HTTPException(401, { message: "Connexion impossible" })

            const expirationDate = new Date(currentDate.getTime() + 1000 * sessionLifetime)
            const [createSession] = await db
                .insert(sessions)
                .values({
                    id: generateId(),
                    idUser: readUser.id,
                    expiresOn: expirationDate.toISOString(),
                    isActive: true
                })
                .returning()

            await setSignedCookie(c, "id_session", createSession.id, cookiesKey, {
                expires: expirationDate,
                httpOnly: true,
                secure: true,
                sameSite: "None",
                domain: env()?.COOKIES_DOMAIN
            })
            setCookie(c, "is_signed_in", "true", {
                expires: expirationDate,
                httpOnly: false,
                secure: true,
                sameSite: "None",
                domain: env()?.COOKIES_DOMAIN
            })

            return c.json(createSession, 200)
        }
    )
    .patch(
        '/validate-email',
        validator("json", bodyValidator(shared.users.patch.validateEmail.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [readUser] = await db
                .select()
                .from(users)
                .where(and(
                    eq(users.id, body.id),
                    isNotNull(users.emailToken),
                    eq(users.emailToken, body.emailToken)
                ))
            if (!readUser) throw new HTTPException(403, { message: "Utilisateur non trouvé" })

            await db
                .update(users)
                .set({
                    email: sql`${users.emailToValidate}`,
                    isEmailValidated: true,
                    emailToValidate: null,
                    emailToken: null,
                    emailTokenExpiresOn: null,
                    lastUpdatedBy: null,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(users.id, body.id))

            return c.json({}, 200)
        }
    )

