import { accounts } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from "hono"
import { validator } from "hono/validator"
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { checkCurrentYear } from "../../middlewares/checkCurrentYear.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const accountsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.accounts.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createAccount] = await db
                .insert(accounts)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idParent: body.idParent,
                    isClass: body.isClass ?? false,
                    isSelectable: body.isSelectable ?? false,
                    isDefault: false,
                    label: body.label,
                    number: body.number,
                    type: body.type,
                    scope: c.var.organization.scope,
                    isMandatory: true,
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
                    .where(and(
                        eq(accounts.idOrganization, c.var.user.idOrganization),
                        eq(accounts.idYear, c.var.currentYear.id)
                    ))

                return c.json(readAccounts, 200)
            }

            const [readAccount] = await db
                .select()
                .from(accounts)
                .where(and(
                    eq(accounts.idOrganization, c.var.user.idOrganization),
                    eq(accounts.id, params.idAccount)
                ))

            return c.json(readAccount, 200)
        }
    )
    .put(
        '/:idAccount',
        checkCurrentYear,
        validator("param", paramsValidator(auth.accounts.put.params)),
        validator("json", bodyValidator(auth.accounts.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateAccount] = await db
                .update(accounts)
                .set({
                    idParent: body.idParent,
                    isClass: body.isClass ?? undefined,
                    isSelectable: body.isSelectable ?? undefined,
                    isDefault: false,
                    label: body.label,
                    number: body.number,
                    type: body.type,
                    isMandatory: true,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(accounts.idOrganization, c.var.user.idOrganization),
                    eq(accounts.id, params.idAccount)
                ))
                .returning()

            return c.json(updateAccount, 200)
        }
    )
    .delete(
        '/:idAccount',
        checkCurrentYear,
        validator("param", paramsValidator(auth.accounts.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteAccount] = await db
                .delete(accounts)
                .where(and(
                    eq(accounts.idOrganization, c.var.user.idOrganization),
                    eq(accounts.id, params.idAccount)
                ))
                .returning()

            return c.json(deleteAccount, 200)
        }
    )
