import { transactions } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


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
                    idCompany: c.var.user.idCompany,
                    idYear: body.idYear,
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    isConfirmed: false,
                    label: body.label,
                    date: body.date,
                    debit: (body.debit ?? 0).toString(),
                    credit: (body.credit ?? 0).toString()
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
                    .where(eq(transactions.idCompany, c.var.user.idCompany))

                return c.json(readTransactions, 200)
            }

            const [readTransaction] = await db
                .select()
                .from(transactions)
                .where(eq(transactions.id, params.idTransaction))

            if (!readTransaction) throw new HTTPException(404, { message: "Entrée non trouvée" })
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
                    idYear: body.idYear,
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    label: body.label,
                    date: body.date,
                    debit: body.debit?.toString(),
                    credit: body.credit?.toString()
                })
                .where(eq(transactions.id, params.idTransaction))
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
                .where(eq(transactions.id, params.idTransaction))
                .returning()

            return c.json(deleteTransaction, 200)
        }
    )
