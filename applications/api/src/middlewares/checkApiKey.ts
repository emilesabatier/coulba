import { companies } from "@coulba/schemas/models"
import { pbkdf2Sync } from "crypto"
import { eq } from "drizzle-orm"
import { MiddlewareHandler } from "hono"
import { HTTPException } from "hono/http-exception"
import { db } from "../clients/db"
import { env } from "../env"


export const checkApiKey: MiddlewareHandler = async (c, next) => {

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

    await next()

}
