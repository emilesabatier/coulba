import { years } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const yearsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.years.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createYear] = await db
                .insert(years)
                .values({
                    id: generateId(),
                    isSelected: false,
                    idCompany: c.var.company.id,
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createYear, 200)
        }
    )
    .get(
        "/:idYear?",
        validator("param", paramsValidator(auth.years.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idYear) {
                const readYears = await db
                    .select()
                    .from(years)
                    .where(eq(years.idCompany, c.var.user.idCompany))

                return c.json(readYears, 200)
            }

            const [readYear] = await db
                .select()
                .from(years)
                .where(eq(years.id, params.idYear))

            return c.json(readYear, 200)
        }
    )
    .put(
        '/:idYear',
        validator("param", paramsValidator(auth.years.put.params)),
        validator("json", bodyValidator(auth.years.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateYear] = await db
                .update(years)
                .set({
                    isSelected: body.isSelected,
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(years.id, params.idYear))
                .returning()

            return c.json(updateYear, 200)
        }
    )
    .delete(
        '/:idYear',
        validator("param", paramsValidator(auth.years.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteYear] = await db
                .delete(years)
                .where(eq(years.id, params.idYear))
                .returning()

            return c.json(deleteYear, 200)
        }
    )
    .patch(
        '/switch/:idYear',
        validator("param", paramsValidator(auth.years.patch.switch.params)),
        async (c) => {
            const params = c.req.valid('param')

            await db
                .update(years)
                .set({
                    isSelected: false,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(years.idCompany, c.var.company.id))

            const [updateYear] = await db
                .update(years)
                .set({
                    isSelected: true,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(years.id, params.idYear))
                .returning()

            return c.json(updateYear, 200)
        }
    )
