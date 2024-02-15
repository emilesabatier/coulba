import { years } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const yearsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.years.create.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createYear] = await db
                .insert(years)
                .values({
                    id: generateId(),
                    idCompany: c.var.user.idCompany,
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn
                })
                .returning()

            return c.json(createYear, 200)
        }
    )
    .get(
        "/:idYear",
        validator("param", paramsValidator(auth.years.read.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idYear) {
                const readYears = await db
                    .select()
                    .from(years)
                    .where(eq(years.idCompany, c.var.user.idCompany))

                if (readYears.length < 1) throw new HTTPException(404, { message: "Exercices non trouvés" })
                return c.json(readYears, 200)
            }

            const [readYear] = await db
                .select()
                .from(years)
                .where(eq(years.id, params.idYear))

            if (!readYear) throw new HTTPException(404, { message: "Exercice non trouvé" })
            return c.json(readYear, 200)
        }
    )
    .put(
        '/:idYear',
        validator("param", paramsValidator(auth.years.update.params)),
        validator("json", bodyValidator(auth.years.update.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateYear] = await db
                .update(years)
                .set({
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn
                })
                .where(eq(years.id, params.idYear))
                .returning()

            return c.json(updateYear, 200)
        }
    )
    .delete(
        '/:idYear',
        validator("param", paramsValidator(auth.years.update.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteYear] = await db
                .delete(years)
                .where(eq(years.id, params.idYear))
                .returning()

            return c.json(deleteYear, 200)
        }
    )
