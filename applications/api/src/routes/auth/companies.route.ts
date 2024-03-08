import { companies } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const companiesRoute = new Hono<AuthEnv>()
    .get(
        "/",
        async (c) => {
            const [readCompany] = await db
                .select()
                .from(companies)
                .where(eq(companies.id, c.var.user.idCompany))

            if (!readCompany) throw new HTTPException(404, { message: "Société non trouvée" })
            return c.json(readCompany, 200)
        }
    )
    .put(
        '/:idCompany',
        validator("param", paramsValidator(auth.companies.put.params)),
        validator("json", bodyValidator(auth.companies.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateCompany] = await db
                .update(companies)
                .set({
                    siren: body.siren,
                    name: body.name
                })
                .where(eq(companies.id, params.idCompany))
                .returning()

            return c.json(updateCompany, 200)
        }
    )
