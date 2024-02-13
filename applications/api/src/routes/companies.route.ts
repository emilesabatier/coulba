import { companies } from "@coulba/schemas/models"
import { createOneCompanyBody } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import * as v from "valibot"
import { db } from "../clients/db"


export const companiesRoute = new Hono()
    .post(
        '/',
        validator("json", (value, c) => {
            const parsed = v.safeParse(createOneCompanyBody, value)
            if (!parsed.success) {
                console.log(parsed.issues)
                return c.text('Requête invalide.', 401)
            }
            return parsed.output
        }),
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
