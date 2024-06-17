import { organizations } from "@coulba/schemas/models"
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


export const organizationsRoute = new Hono<AuthEnv>()
    .get(
        "/",
        async (c) => {
            const [readOrganization] = await db
                .select()
                .from(organizations)
                .where(eq(organizations.id, c.var.organization.id))

            return c.json(readOrganization, 200)
        }
    )
    .put(
        '/',
        validator("json", bodyValidator(auth.organizations.put.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [updateOrganization] = await db
                .update(organizations)
                .set({
                    siren: body.siren,
                    name: body.name,
                    email: body.email,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(organizations.id, c.var.organization.id))
                .returning()

            return c.json(updateOrganization, 200)
        }
    )
    .patch(
        '/generate-api-key',
        validator("json", bodyValidator(auth.organizations.patch.generateApiKey.body)),
        async (c) => {
            const body = c.req.valid('json')
            if (!body.apiKey) throw new HTTPException(500, { message: "Impossible de générer la clé" })

            const salt = env()?.V1_API_KEY_SALT
            if (!salt) throw new HTTPException(500, { message: "Impossible de générer la clé" })

            const apiKeyHash = pbkdf2Sync(body.apiKey, salt, 128000, 64, `sha512`).toString(`hex`)

            const [updateOrganization] = await db
                .update(organizations)
                .set({
                    apiKeyHash: apiKeyHash,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(organizations.id, c.var.organization.id))
                .returning()

            return c.json(updateOrganization, 200)
        }
    )
