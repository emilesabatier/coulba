import { accounts } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const accountsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.accounts.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createAccount] = await db
                .insert(accounts)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    idStatement: body.idStatement,
                    idParent: body.idParent,
                    label: body.label,
                    number: body.number,
                    system: body.system,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createAccount, 200)
        }
    )
    .get(
        "/:idAccount?",
        validator("param", paramsValidator(auth.accounts.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idAccount) {
                const readAccounts = await db
                    .select()
                    .from(accounts)
                    .where(eq(accounts.idCompany, c.var.user.idCompany))

                return c.json(readAccounts, 200)
            }

            const [readAccount] = await db
                .select()
                .from(accounts)
                .where(and(
                    eq(accounts.idCompany, c.var.user.idCompany),
                    eq(accounts.id, params.idAccount)
                ))

            return c.json(readAccount, 200)
        }
    )
    .put(
        '/:idAccount',
        validator("param", paramsValidator(auth.accounts.put.params)),
        validator("json", bodyValidator(auth.accounts.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateAccount] = await db
                .update(accounts)
                .set({
                    idStatement: body.idStatement,
                    idParent: body.idParent,
                    label: body.label,
                    number: body.number,
                    system: body.system,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(eq(accounts.id, params.idAccount))
                .returning()

            return c.json(updateAccount, 200)
        }
    )
    .delete(
        '/:idAccount',
        validator("param", paramsValidator(auth.accounts.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteAccount] = await db
                .delete(accounts)
                .where(eq(accounts.id, params.idAccount))
                .returning()

            return c.json(deleteAccount, 200)
        }
    )
