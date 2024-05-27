import { records } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { transactions } from "../../../../../packages/schemas/build/models/transactions.model.js"
import { transactionInclude } from "../../../../../packages/schemas/build/schemas/transaction/transaction.include.js"
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { checkCurrentYear } from "../../middlewares/checkCurrentYear.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const transactionsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.transactions.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createTransaction] = await db
                .insert(transactions)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    isConfirmed: false,
                    label: body.label,
                    date: body.date,
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
                const readTransactions = await db.query.transactions.findMany({
                    where: and(
                        eq(transactions.idCompany, c.var.user.idCompany),
                        eq(transactions.idYear, c.var.currentYear.id)
                    ),
                    columns: transactionInclude,
                    with: {
                        records: true
                    }
                })

                return c.json(readTransactions, 200)
            }

            const readTransaction = await db.query.transactions.findFirst({
                where: and(
                    eq(transactions.idCompany, c.var.user.idCompany),
                    eq(transactions.id, params.idTransaction)
                ),
                columns: transactionInclude,
                with: {
                    records: true
                }
            })

            return c.json(readTransaction, 200)
        }
    )
    .put(
        '/:idTransaction',
        validator("param", paramsValidator(auth.transactions.put.params)),
        validator("json", bodyValidator(auth.transactions.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateTransaction] = await db
                .update(transactions)
                .set({
                    label: body.label,
                    date: body.date,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(transactions.idCompany, c.var.user.idCompany),
                    eq(transactions.id, params.idTransaction),
                    eq(records.isConfirmed, false)
                ))
                .returning()

            return c.json(updateTransaction, 200)
        }
    )
    .delete(
        '/:idTransaction',
        validator("param", paramsValidator(auth.transactions.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteTransaction] = await db
                .delete(transactions)
                .where(and(
                    eq(transactions.idCompany, c.var.user.idCompany),
                    eq(transactions.id, params.idTransaction),
                    eq(records.isConfirmed, false)
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

            await db.transaction(async (tx) => {
                await tx
                    .update(transactions)
                    .set({
                        isConfirmed: true,
                        lastUpdatedBy: c.var.user.id,
                        lastUpdatedOn: new Date().toISOString()
                    })
                    .where(and(
                        eq(transactions.idCompany, c.var.user.idCompany),
                        eq(transactions.id, params.idTransaction)
                    ))

                await tx
                    .update(records)
                    .set({
                        isConfirmed: true,
                        lastUpdatedBy: c.var.user.id,
                        lastUpdatedOn: new Date().toISOString()
                    })
                    .where(and(
                        eq(records.idCompany, c.var.user.idCompany),
                        eq(records.idTransaction, params.idTransaction)
                    ))
            })

            return c.json({}, 200)
        }
    )
