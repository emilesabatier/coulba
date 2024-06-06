import { statements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { statementInclude } from "../../../../../packages/schemas/build/schemas/statement/statement.include.js"
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"
import { computationStatementsRoute } from "./computationStatements.route.js"


export const statementsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.statements.post.body)),
        async (c) => {
            if (!c.var.currentYear) throw new HTTPException(400)

            const body = c.req.valid('json')

            const [createStatement] = await db
                .insert(statements)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idParent: body.idParent,
                    label: body.label,
                    number: body.number,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createStatement, 200)
        }
    )
    .get(
        "/:idStatement?",
        validator("param", paramsValidator(auth.statements.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idStatement) {
                if (!c.var.currentYear) return c.json([], 200)

                const readStatements = await db.query.statements.findMany({
                    where: and(
                        eq(statements.idOrganization, c.var.user.idOrganization),
                        eq(statements.idYear, c.var.currentYear.id)
                    ),
                    columns: statementInclude,
                    with: {
                        accountStatements: true
                    }
                })

                return c.json(readStatements, 200)
            }

            const readStatement = await db.query.statements.findFirst({
                where: and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.id, params.idStatement)
                ),
                columns: statementInclude,
                with: {
                    accountStatements: true
                }
            })

            return c.json(readStatement, 200)
        }
    )
    .put(
        '/:idStatement',
        validator("param", paramsValidator(auth.statements.put.params)),
        validator("json", bodyValidator(auth.statements.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateStatement] = await db
                .update(statements)
                .set({
                    idParent: body.idParent,
                    label: body.label,
                    number: body.number,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.id, params.idStatement)
                ))
                .returning()

            return c.json(updateStatement, 200)
        }
    )
    .delete(
        '/:idStatement',
        validator("param", paramsValidator(auth.statements.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteStatement] = await db
                .delete(statements)
                .where(and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.id, params.idStatement)
                ))
                .returning()

            return c.json(deleteStatement, 200)
        }
    )
    .route('/computation-statements', computationStatementsRoute)
