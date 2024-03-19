import { companies } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"


export const companiesRoute = new Hono<AuthEnv>()
    .get(
        "/",
        async (c) => {
            const [readCompany] = await db
                .select()
                .from(companies)
                .where(eq(companies.id, c.var.user.idCompany))

            return c.json(readCompany, 200)
        }
    )
    .put(
        '/:idCompany',
        validator("json", bodyValidator(auth.companies.put.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [updateCompany] = await db
                .update(companies)
                .set({
                    siren: body.siren,
                    email: body.email,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(companies.id, c.var.company.id))
                .returning()

            return c.json(updateCompany, 200)
        }
    )
