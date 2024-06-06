import { accountSheets } from "@coulba/schemas/models"
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


export const accountSheetsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.accountSheets.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createAccountSheet] = await db
                .insert(accountSheets)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idAccount: body.idAccount,
                    idSheet: body.idSheet,
                    flow: body.flow,
                    isAllowance: body.isAllowance,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createAccountSheet, 200)
        }
    )
    .get(
        "/:idAccountSheet?",
        validator("param", paramsValidator(auth.accountSheets.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idAccountSheet) {
                const readAccountSheets = await db
                    .select()
                    .from(accountSheets)
                    .where(and(
                        eq(accountSheets.idOrganization, c.var.user.idOrganization)
                    ))

                return c.json(readAccountSheets, 200)
            }

            const [readAccountSheet] = await db
                .select()
                .from(accountSheets)
                .where(and(
                    eq(accountSheets.idOrganization, c.var.user.idOrganization),
                    eq(accountSheets.id, params.idAccountSheet)
                ))

            return c.json(readAccountSheet, 200)
        }
    )
    .put(
        '/:idAccountSheet',
        checkCurrentYear,
        validator("param", paramsValidator(auth.accountSheets.put.params)),
        validator("json", bodyValidator(auth.accountSheets.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateAccountSheet] = await db
                .update(accountSheets)
                .set({
                    idAccount: body.idAccount,
                    flow: body.flow,
                    isAllowance: body.isAllowance,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(accountSheets.idOrganization, c.var.user.idOrganization),
                    eq(accountSheets.id, params.idAccountSheet)
                ))
                .returning()

            return c.json(updateAccountSheet, 200)
        }
    )
    .delete(
        '/:idAccountSheet',
        checkCurrentYear,
        validator("param", paramsValidator(auth.accountSheets.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteAccountSheet] = await db
                .delete(accountSheets)
                .where(and(
                    eq(accountSheets.idOrganization, c.var.user.idOrganization),
                    eq(accountSheets.id, params.idAccountSheet)
                ))
                .returning()

            return c.json(deleteAccountSheet, 200)
        }
    )
