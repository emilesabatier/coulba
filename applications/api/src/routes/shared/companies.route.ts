import { companies } from "@coulba/schemas/models"
import { shared } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"


export const companiesRoute = new Hono()
    .post(
        '/',
        validator("json", bodyValidator(shared.companies.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createCompany] = await db
                .insert(companies)
                .values({
                    id: generateId(),
                    idYear: body.idYear,
                    siren: body.siren,
                    name: body.name
                })
                .returning()

            return c.json(createCompany, 200)
        }
    )
