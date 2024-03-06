import { records } from "@coulba/schemas/models"
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


export const recordsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.records.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createRecord] = await db
                .insert(records)
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
                    debit: body.debit.toString(),
                    credit: body.credit.toString()
                })
                .returning()

            return c.json(createRecord, 200)
        }
    )
    .get(
        "/:idRecord?",
        validator("param", paramsValidator(auth.records.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idRecord) {
                const readRecords = await db
                    .select()
                    .from(records)
                    .where(eq(records.idCompany, c.var.user.idCompany))

                return c.json(readRecords, 200)
            }

            const [readRecord] = await db
                .select()
                .from(records)
                .where(eq(records.id, params.idRecord))

            if (!readRecord) throw new HTTPException(404, { message: "Entrée non trouvée" })
            return c.json(readRecord, 200)
        }
    )
    .put(
        '/:idRecord',
        validator("param", paramsValidator(auth.records.put.params)),
        validator("json", bodyValidator(auth.records.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateRecord] = await db
                .update(records)
                .set({
                    idYear: body.idYear,
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    isConfirmed: body.isConfirmed,
                    label: body.label,
                    date: body.date,
                    debit: body.debit?.toString(),
                    credit: body.credit?.toString()
                })
                .where(eq(records.id, params.idRecord))
                .returning()

            return c.json(updateRecord, 200)
        }
    )
    .delete(
        '/:idRecord',
        validator("param", paramsValidator(auth.records.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteRecord] = await db
                .delete(records)
                .where(eq(records.id, params.idRecord))
                .returning()

            return c.json(deleteRecord, 200)
        }
    )
