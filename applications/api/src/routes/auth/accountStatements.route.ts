import { accountStatements } from "@coulba/schemas/models"
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


export const accountStatementsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.accountStatements.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createAccountStatement] = await db
                .insert(accountStatements)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idAccount: body.idAccount,
                    idStatement: body.idStatement,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createAccountStatement, 200)
        }
    )
    .get(
        "/:idAccountStatement?",
        validator("param", paramsValidator(auth.accountStatements.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idAccountStatement) {
                const readAccountStatements = await db
                    .select()
                    .from(accountStatements)
                    .where(and(
                        eq(accountStatements.idOrganization, c.var.user.idOrganization)
                    ))

                return c.json(readAccountStatements, 200)
            }

            const [readAccountStatement] = await db
                .select()
                .from(accountStatements)
                .where(and(
                    eq(accountStatements.idOrganization, c.var.user.idOrganization),
                    eq(accountStatements.id, params.idAccountStatement)
                ))

            return c.json(readAccountStatement, 200)
        }
    )
    .put(
        '/:idAccountStatement',
        checkCurrentYear,
        validator("param", paramsValidator(auth.accountStatements.put.params)),
        validator("json", bodyValidator(auth.accountStatements.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateAccountStatement] = await db
                .update(accountStatements)
                .set({
                    idAccount: body.idAccount,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(accountStatements.idOrganization, c.var.user.idOrganization),
                    eq(accountStatements.id, params.idAccountStatement)
                ))
                .returning()

            return c.json(updateAccountStatement, 200)
        }
    )
    .delete(
        '/:idAccountStatement',
        checkCurrentYear,
        validator("param", paramsValidator(auth.accountStatements.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteAccountStatement] = await db
                .delete(accountStatements)
                .where(and(
                    eq(accountStatements.idOrganization, c.var.user.idOrganization),
                    eq(accountStatements.id, params.idAccountStatement)
                ))
                .returning()

            return c.json(deleteAccountStatement, 200)
        }
    )
