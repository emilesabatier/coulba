import { companies } from "@coulba/schemas/models"
import { createOneCompanyBody } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../clients/db"
import { bodyValidator } from "../services/bodyValidator"


export const companiesRoute = new Hono()
    .post(
        '/',
        validator("json", bodyValidator(createOneCompanyBody)),
        async (c) => {
            const body = c.req.valid('json')

            const [insertCompany] = await db
                .insert(companies)
                .values({
                    id: generateId(),
                    siren: body.siren,
                    name: body.name
                })
                .returning()

            return c.json(insertCompany, 200)
        }
    )
