import { transactions } from "@coulba/schemas/models"
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


export const transactionsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.transactions.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createTransaction] = await db
                .insert(transactions)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    isConfirmed: false,
                    label: body.label,
                    date: body.date,
                    debit: (body.debit ?? 0).toString(),
                    credit: (body.credit ?? 0).toString(),
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createTransaction, 200)
        }
    )
    .get(
        "/:idTransaction?",
        validator("param", paramsValidator(auth.transactions.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idTransaction) {
                const readTransactions = await db
                    .select()
                    .from(transactions)
                    .where(and(
                        eq(transactions.idCompany, c.var.user.idCompany),
                        eq(transactions.idYear, c.var.currentYear.id)
                    ))

                return c.json(readTransactions, 200)
            }

            const [readTransaction] = await db
                .select()
                .from(transactions)
                .where(eq(transactions.id, params.idTransaction))

            return c.json(readTransaction, 200)
        }
    )
    .put(
        '/:idTransaction',
        checkCurrentYear,
        validator("param", paramsValidator(auth.transactions.put.params)),
        validator("json", bodyValidator(auth.transactions.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateTransaction] = await db
                .update(transactions)
                .set({
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    label: body.label,
                    date: body.date,
                    debit: body.debit?.toString(),
                    credit: body.credit?.toString(),
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(transactions.id, params.idTransaction),
                    eq(transactions.isConfirmed, false)
                ))
                .returning()

            return c.json(updateTransaction, 200)
        }
    )
    .delete(
        '/:idTransaction',
        checkCurrentYear,
        validator("param", paramsValidator(auth.transactions.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteTransaction] = await db
                .delete(transactions)
                .where(and(
                    eq(transactions.id, params.idTransaction),
                    eq(transactions.isConfirmed, false)
                ))
                .returning()

            return c.json(deleteTransaction, 200)
        }
    )
    .patch(
        '/:idTransaction/validate',
        checkCurrentYear,
        validator("param", paramsValidator(auth.transactions.patch.validate.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [updateTransaction] = await db
                .update(transactions)
                .set({
                    isConfirmed: true,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(eq(transactions.id, params.idTransaction))
                .returning()

            return c.json(updateTransaction, 200)
        }
    )
