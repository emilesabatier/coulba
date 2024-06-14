import { organizations, sessions, users, years } from "@coulba/schemas/models"
import { and, eq } from "drizzle-orm"
import { MiddlewareHandler } from "hono"
import { deleteCookie, getSignedCookie } from "hono/cookie"
import { HTTPException } from "hono/http-exception"
import { db } from "../clients/db.js"
import { env } from "../env.js"


export type AuthEnv = {
    Variables: {
        currentYear: typeof years.$inferSelect
        organization: typeof organizations.$inferSelect
        user: typeof users.$inferSelect
    }
}

export const checkAuth: MiddlewareHandler<AuthEnv> = async (c, next) => {

    const baseUrl = env()?.APP_BASE_URL
    const cookiesKey = env()?.COOKIES_KEY
    if (!cookiesKey || !baseUrl) throw new HTTPException(500, { message: "Erreur interne" })

    const { id_session: idSession } = await getSignedCookie(c, cookiesKey)
    if (!idSession) {
        deleteCookie(c, "id_session")
        deleteCookie(c, "is_signed_in")
        c.redirect(baseUrl)
        throw new HTTPException(401, { message: "Cookie de session manquant" })
    }

    const [readSession] = await db
        .select()
        .from(sessions)
        .where(
            and(
                eq(sessions.id, idSession),
                eq(sessions.isActive, true)
            )
        )
    if (!readSession) {
        deleteCookie(c, "id_session")
        deleteCookie(c, "is_signed_in")
        c.redirect(baseUrl)
        throw new HTTPException(401, { message: "Session non trouvée" })
    }

    const [readUser] = await db
        .select()
        .from(users)
        .where(
            eq(users.id, readSession.idUser)
        )
    if (!readUser) {
        deleteCookie(c, "id_session")
        deleteCookie(c, "is_signed_in")
        c.redirect(baseUrl)
        throw new HTTPException(401, { message: "Utilisateur non trouvé" })
    }
    c.set('user', readUser)

    const [readOrganization] = await db
        .select()
        .from(organizations)
        .where(
            eq(organizations.id, readUser.idOrganization)
        )
    if (!readOrganization) {
        deleteCookie(c, "id_session")
        deleteCookie(c, "is_signed_in")
        c.redirect(baseUrl)
        throw new HTTPException(401, { message: "Organisation non trouvée" })
    }
    c.set('organization', readOrganization)

    const [readYear] = await db
        .select()
        .from(years)
        .where(and(
            eq(years.idOrganization, readOrganization.id),
            eq(years.isSelected, true)
        ))
    if (!readYear) {
        deleteCookie(c, "id_session")
        deleteCookie(c, "is_signed_in")
        c.redirect(baseUrl)
        throw new HTTPException(401, { message: "Exercice actuel non trouvé" })
    }
    c.set('currentYear', readYear)

    await next()

}
