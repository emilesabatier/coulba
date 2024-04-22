import { companies, sessions, users, years } from "@coulba/schemas/models"
import { and, eq } from "drizzle-orm"
import { MiddlewareHandler } from "hono"
import { getSignedCookie } from "hono/cookie"
import { HTTPException } from "hono/http-exception"
import { db } from "../clients/db.js"
import { env } from "../env.js"


export type AuthEnv = {
    Variables: {
        currentYear: typeof years.$inferSelect
        company: typeof companies.$inferSelect
        user: typeof users.$inferSelect
    }
}

export const checkAuth: MiddlewareHandler<AuthEnv> = async (c, next) => {

    const cookiesKey = env()?.COOKIES_KEY
    if (!cookiesKey) throw new HTTPException(500, { message: "Erreur interne" })

    const { id_session: idSession } = await getSignedCookie(c, cookiesKey)
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

    const [readCompany] = await db
        .select()
        .from(companies)
        .where(
            eq(companies.id, readUser.idCompany)
        )
    if (!readCompany) throw new HTTPException(401, { message: "Session invalide" })
    c.set('company', readCompany)

    const [readYear] = await db
        .select()
        .from(years)
        .where(and(
            eq(years.idCompany, readCompany.id),
            eq(years.isSelected, true)
        ))
    if (!readYear) throw new HTTPException(401, { message: "Session invalide" })
    c.set('currentYear', readYear)

    await next()

}
