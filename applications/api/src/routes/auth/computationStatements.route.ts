import { computationStatements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { checkCurrentYear } from "../../middlewares/checkCurrentYear.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const computationStatementsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.computationStatements.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createComputationStatement] = await db
                .insert(computationStatements)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idComputation: body.idComputation,
                    idStatement: body.idStatement,
                    operation: body.operation,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createComputationStatement, 200)
        }
    )
    .get(
        "/:idComputationStatement?",
        validator("param", paramsValidator(auth.computationStatements.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idComputationStatement) {
                const readComputationStatements = await db
                    .select()
                    .from(computationStatements)
                    .where(and(
                        eq(computationStatements.idOrganization, c.var.user.idOrganization)
                    ))

                return c.json(readComputationStatements, 200)
            }

            const [readComputationStatement] = await db
                .select()
                .from(computationStatements)
                .where(and(
                    eq(computationStatements.idOrganization, c.var.user.idOrganization),
                    eq(computationStatements.id, params.idComputationStatement)
                ))

            return c.json(readComputationStatement, 200)
        }
    )
    .put(
        '/:idComputationStatement',
        checkCurrentYear,
        validator("param", paramsValidator(auth.computationStatements.put.params)),
        validator("json", bodyValidator(auth.computationStatements.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateComputationStatement] = await db
                .update(computationStatements)
                .set({
                    idStatement: body.idStatement,
                    operation: body.operation,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(computationStatements.idOrganization, c.var.user.idOrganization),
                    eq(computationStatements.id, params.idComputationStatement)
                ))
                .returning()

            return c.json(updateComputationStatement, 200)
        }
    )
    .delete(
        '/:idComputationStatement',
        checkCurrentYear,
        validator("param", paramsValidator(auth.computationStatements.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteComputationStatement] = await db
                .delete(computationStatements)
                .where(and(
                    eq(computationStatements.idOrganization, c.var.user.idOrganization),
                    eq(computationStatements.id, params.idComputationStatement)
                ))
                .returning()

            return c.json(deleteComputationStatement, 200)
        }
    )
