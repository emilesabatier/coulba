import { sessions, users } from "@coulba/schemas/models"
import { shared } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { pbkdf2Sync } from "crypto"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { setCookie, setSignedCookie } from "hono/cookie"
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { env } from "../../env"
import { bodyValidator } from "../../middlewares/bodyValidator"


export const sessionsRoute = new Hono()
    .patch(
        '/sign-in',
        validator("json", bodyValidator(shared.sessions.signIn.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [readUser] = await db
                .select()
                .from(users)
                .where(
                    and(
                        eq(users.email, body.email),
                        eq(users.isActive, true)
                    )
                )
            if (!readUser) throw new HTTPException(401, { message: "Connexion impossible" })

            const submittedPasswordHash = pbkdf2Sync(body.password, readUser.passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            if ((submittedPasswordHash !== readUser.passwordHash)) throw new HTTPException(401, { message: "Connexion impossible" })


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
