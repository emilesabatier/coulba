import { computations } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { computationInclude } from "@coulba/schemas/schemas"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const computationsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.computations.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createComputation] = await db
                .insert(computations)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    number: body.number,
                    label: body.label,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()


            return c.json(createComputation, 200)
        }
    )
    .get(
        "/:idComputation?",
        validator("param", paramsValidator(auth.computations.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idComputation) {
                const readComputations = await db.query.computations.findMany({
                    where: and(
                        eq(computations.idCompany, c.var.user.idCompany),
                        eq(computations.idYear, c.var.currentYear.id)
                    ),
                    columns: computationInclude,
                    with: {
                        computationStatements: true
                    }
                })

                return c.json(readComputations, 200)
            }

            const readComputation = await db.query.computations.findFirst({
                where: and(
                    eq(computations.idCompany, c.var.user.idCompany),
                    eq(computations.id, params.idComputation)
                ),
                columns: computationInclude,
                with: {
                    computationStatements: true
                }
            })

            return c.json(readComputation, 200)
        }
    )
    .put(
        '/:idComputation',
        validator("param", paramsValidator(auth.computations.put.params)),
        validator("json", bodyValidator(auth.computations.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateComputation] = await db
                .update(computations)
                .set({
                    number: body.number,
                    label: body.label,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(computations.idCompany, c.var.user.idCompany),
                    eq(computations.id, params.idComputation)
                ))
                .returning()

            return c.json(updateComputation, 200)
        }
    )
    .delete(
        '/:idComputation',
        validator("param", paramsValidator(auth.computations.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteComputation] = await db
                .delete(computations)
                .where(and(
                    eq(computations.idCompany, c.var.user.idCompany),
                    eq(computations.id, params.idComputation)
                ))
                .returning()

            return c.json(deleteComputation, 200)
        }
    )
