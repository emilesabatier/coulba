import { sessions, users } from "@coulba/schemas/models"
import { UserReturned } from "@coulba/schemas/schemas"
import { and, eq } from "drizzle-orm"
import { MiddlewareHandler } from "hono"
import { getSignedCookie } from "hono/cookie"
import { HTTPException } from "hono/http-exception"
import { db } from "../clients/db"
import { env } from "../env"


export type AuthEnv = {
    Variables: {
        user: UserReturned
    }
}

export const checkAuth: MiddlewareHandler<AuthEnv> = async (c, next) => {

    const cookiesKey = env()?.COOKIES_KEY
    if (!cookiesKey) throw new HTTPException(401, { message: "Session invalide" })

    const { idSession } = await getSignedCookie(c, cookiesKey)
    if (!idSession) throw new HTTPException(401, { message: "Session invalide" })

    const [readSession] = await db
        .select()
        .from(sessions)
        .where(
            and(
                eq(sessions.id, idSession),
                eq(sessions.isActive, true)
            )
        )
    if (!readSession) throw new HTTPException(401, { message: "Session invalide" })

    const [readUser] = await db
        .select()
        .from(users)
        .where(
            eq(users.id, readSession.idUser)
        )
    if (!readUser) throw new HTTPException(401, { message: "Session invalide" })

    c.set('user', readUser)
    await next()

}
