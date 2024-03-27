import { companies, years } from "@coulba/schemas/models"
import { CompanyReturned, YearReturned } from "@coulba/schemas/schemas"
import { pbkdf2Sync } from "crypto"
import { and, eq } from "drizzle-orm"
import { MiddlewareHandler } from "hono"
import { HTTPException } from "hono/http-exception"
import { db } from "../clients/db"
import { env } from "../env"


export type V1Env = {
    Variables: {
        currentYear: YearReturned
        company: CompanyReturned
    }
}

export const checkApiKey: MiddlewareHandler<V1Env> = async (c, next) => {

    const { key } = c.req.query()
    if (!key) throw new HTTPException(401, { message: "La clé API n'est pas renseignée" })

    const salt = env()?.V1_API_KEY_SALT
    if (!salt) throw new HTTPException(500, { message: "Connexion à l'API impossible" })

    const keyHash = pbkdf2Sync(key, salt, 128000, 64, `sha512`).toString(`hex`)

    const [readCompany] = await db
        .select()
        .from(companies)
        .where(
            eq(companies.apiKeyHash, keyHash)
        )
    if (!readCompany) throw new HTTPException(401, { message: "Connexion à l'API impossible" })

    const [readYear] = await db
        .select()
        .from(years)
        .where(and(
            eq(years.idCompany, readCompany.id),
            eq(years.isSelected, true)
        ))
    if (!readYear) throw new HTTPException(401, { message: "Connexion à l'API impossible" })

    c.set('company', readCompany)
    c.set('currentYear', readYear)

    await next()
}
