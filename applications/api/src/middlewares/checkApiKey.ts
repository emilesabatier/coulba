import { organizations, years } from "@coulba/schemas/models"
import { OrganizationReturned, YearReturned } from "@coulba/schemas/schemas"
import { pbkdf2Sync } from "crypto"
import { and, eq } from "drizzle-orm"
import { MiddlewareHandler } from "hono"
import { HTTPException } from "hono/http-exception"
import { db } from "../clients/db.js"
import { env } from "../env.js"


export type V1Env = {
    Variables: {
        currentYear: YearReturned
        organization: OrganizationReturned
    }
}

export const checkApiKey: MiddlewareHandler<V1Env> = async (c, next) => {

    const { key } = c.req.query()
    if (!key) throw new HTTPException(401, { message: "La clé API n'est pas renseignée" })

    const salt = env()?.V1_API_KEY_SALT
    if (!salt) throw new HTTPException(500, { message: "Connexion à l'API impossible" })

    const keyHash = pbkdf2Sync(key, salt, 128000, 64, `sha512`).toString(`hex`)

    const [readOrganization] = await db
        .select()
        .from(organizations)
        .where(
            eq(organizations.apiKeyHash, keyHash)
        )
    if (!readOrganization) throw new HTTPException(401, { message: "Connexion à l'API impossible" })

    const [readYear] = await db
        .select()
        .from(years)
        .where(and(
            eq(years.idOrganization, readOrganization.id),
            eq(years.isSelected, true)
        ))
    if (!readYear) throw new HTTPException(401, { message: "Connexion à l'API impossible" })

    c.set('organization', readOrganization)
    c.set('currentYear', readYear)

    await next()
}
