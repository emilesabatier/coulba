import { sessions, users } from '@coulba/schemas/models'
import { shared } from '@coulba/schemas/routes'
import { generateId } from '@coulba/schemas/services'
import { and, eq } from 'drizzle-orm'
import { Hono } from 'hono'
import { setCookie, setSignedCookie } from 'hono/cookie'
import { HTTPException } from 'hono/http-exception'
import { validator } from 'hono/validator'
import { db } from '../../clients/db.js'
import { env } from '../../env.js'
import { bodyValidator } from '../../middlewares/bodyValidator.js'


export const usersRoute = new Hono()
    .patch(
        '/reset-password',
        validator("json", bodyValidator(shared.users.patch.resetPassword.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [updateUser] = await db
                .update(users)
                .set({
                    // isActivated: false,
                    lastUpdatedBy: null,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(users.email, body.email))
                .returning()

            if (!updateUser) throw new HTTPException(200, { message: "" })


            // const passwordSalt = randomBytes(16).toString('hex')
            // const passwordHash = pbkdf2Sync(body.user.password, passwordSalt, 128000, 64, `sha512`).toString(`hex`)


            return c.json(updateUser, 200)
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
                    eq(users.invitationToken, body.invitationToken),

                ))

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
