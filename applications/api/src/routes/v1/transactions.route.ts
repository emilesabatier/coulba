import { transactions } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"


export const transactionsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.transactions.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createTransaction] = await db
                .insert(transactions)
                .values({
                    // id: generateId(),
                    // idCompany: c.var.company.id,
                    // idYear: c.var.currentYear.id,
                    // idAccount: body.idAccount,
                    // idJournal: body.idJournal,
                    // idAttachment: body.idAttachment,
                    // isConfirmed: false,
                    // label: body.label,
                    // date: body.date,
                    // debit: (body.debit ?? 0).toString(),
                    // credit: (body.credit ?? 0).toString(),
                    // lastUpdatedBy: c.var.user.id,
                    // createdBy: c.var.user.id
                })
                .returning()

            return c.json(createTransaction, 200)
        }
    )
