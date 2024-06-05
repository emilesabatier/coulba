import { rows } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { records } from "../../../../../packages/schemas/build/models/records.model.js"
import { recordInclude } from "../../../../../packages/schemas/build/schemas/record/record.include.js"
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { checkCurrentYear } from "../../middlewares/checkCurrentYear.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


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
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    isValidated: false,
                    label: body.label,
                    date: body.date,
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
                const readRecords = await db.query.records.findMany({
                    where: and(
                        eq(records.idCompany, c.var.user.idCompany),
                        eq(records.idYear, c.var.currentYear.id)
                    ),
                    columns: recordInclude,
                    with: {
                        rows: true
                    }
                })

                return c.json(readRecords, 200)
            }

            const readRecord = await db.query.records.findFirst({
                where: and(
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord)
                ),
                columns: recordInclude,
                with: {
                    rows: true
                }
            })

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
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    label: body.label,
                    date: body.date,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord),
                    eq(records.isValidated, false)
                ))
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
                .where(and(
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord),
                    eq(records.isValidated, false)
                ))
                .returning()

            return c.json(deleteRecord, 200)
        }
    )
    .patch(
        '/:idRecord/validate',
        checkCurrentYear,
        validator("param", paramsValidator(auth.records.patch.validate.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [readRecord] = await db
                .select()
                .from(records)
                .where(and(
                    eq(records.idCompany, c.var.user.idCompany),
                    eq(records.id, params.idRecord)
                ))
            if (!readRecord.idAttachment) throw new HTTPException(403, { message: "Il manque une pièce jointe" })

            await db.transaction(async (tx) => {
                await tx
                    .update(records)
                    .set({
                        isValidated: true,
                        validatedOn: new Date().toISOString(),
                        lastUpdatedBy: c.var.user.id,
                        lastUpdatedOn: new Date().toISOString()
                    })
                    .where(and(
                        eq(records.idCompany, c.var.user.idCompany),
                        eq(records.id, params.idRecord)
                    ))

                await tx
                    .update(rows)
                    .set({
                        isValidated: true,
                        lastUpdatedBy: c.var.user.id,
                        lastUpdatedOn: new Date().toISOString()
                    })
                    .where(and(
                        eq(rows.idCompany, c.var.user.idCompany),
                        eq(rows.idRecord, params.idRecord)
                    ))
            })

            return c.json({}, 200)
        }
    )
