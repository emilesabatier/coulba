import { companies } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { pbkdf2Sync } from "crypto"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { env } from "../../env.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"


export const companiesRoute = new Hono<AuthEnv>()
    .get(
        "/",
        async (c) => {
            const [readCompany] = await db
                .select()
                .from(companies)
                .where(eq(companies.id, c.var.company.id))

            return c.json(readCompany, 200)
        }
    )
    .put(
        '/',
        validator("json", bodyValidator(auth.companies.put.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [updateCompany] = await db
                .update(companies)
                .set({
                    name: body.name,
                    address: body.address,
                    email: body.email,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(companies.id, c.var.company.id))
                .returning()

            return c.json(updateCompany, 200)
        }
    )
    .patch(
        '/generate-api-key',
        validator("json", bodyValidator(auth.companies.patch.generateApiKey.body)),
        async (c) => {
            const body = c.req.valid('json')

            const salt = env()?.V1_API_KEY_SALT
            if (!salt) throw new HTTPException(500, { message: "Impossible de générer la clé" })

            const apiKeyHash = pbkdf2Sync(body.apiKey, salt, 128000, 64, `sha512`).toString(`hex`)

            const [updateCompany] = await db
                .update(companies)
                .set({
                    apiKeyHash: apiKeyHash,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(companies.id, c.var.company.id))
                .returning()

            return c.json(updateCompany, 200)
        }
    )
