import { statements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const statementsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.statements.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createStatement] = await db
                .insert(statements)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    idStatementParent: body.idStatementParent,
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
                const readStatements = await db
                    .select()
                    .from(statements)
                    .where(eq(statements.idCompany, c.var.user.idCompany))

                return c.json(readStatements, 200)
            }

            const [readStatement] = await db
                .select()
                .from(statements)
                .where(and(
                    eq(statements.idCompany, c.var.user.idCompany),
                    eq(statements.id, params.idStatement)
                ))

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
                    idStatementParent: body.idStatementParent,
                    label: body.label,
                    number: body.number,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(eq(statements.id, params.idStatement))
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
                .where(eq(statements.id, params.idStatement))
                .returning()

            return c.json(deleteStatement, 200)
        }
    )
