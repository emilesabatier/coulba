import { records } from "@coulba/schemas/models"
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


export const recordsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.records.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createRecord] = await db
                .insert(records)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    idTransaction: body.idTransaction,
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
                    .where(and(
                        eq(records.idCompany, c.var.user.idCompany),
                        eq(records.idYear, c.var.currentYear.id)
                    ))

                return c.json(readRecords, 200)
            }

            const [readRecord] = await db
                .select()
                .from(records)
                .where(and(
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord)
                ))

            return c.json(readRecord, 200)
        }
    )
    .put(
        '/:idRecord',
        checkCurrentYear,
        validator("param", paramsValidator(auth.records.put.params)),
        validator("json", bodyValidator(auth.records.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateRecord] = await db
                .update(records)
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
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord),
                    eq(records.isConfirmed, false)
                ))
                .returning()

            return c.json(updateRecord, 200)
        }
    )
    .delete(
        '/:idRecord',
        checkCurrentYear,
        validator("param", paramsValidator(auth.records.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteRecord] = await db
                .delete(records)
                .where(and(
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord),
                    eq(records.isConfirmed, false)
                ))
                .returning()

            return c.json(deleteRecord, 200)
        }
    )
