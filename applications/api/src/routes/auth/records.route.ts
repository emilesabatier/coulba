import { records, rows } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { recordInclude } from "@coulba/schemas/schemas"
import { generateId } from "@coulba/schemas/services"
import { and, eq, not } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
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
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    isValidated: false,
                    isComputed: true,
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
                        eq(records.idOrganization, c.var.user.idOrganization),
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
                    eq(records.idOrganization, c.var.user.idOrganization),
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
        checkCurrentYear,
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
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.id, params.idRecord),
                    eq(records.isValidated, false)
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
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.id, params.idRecord),
                    eq(records.isValidated, false)
                ))
                .returning()

            return c.json(deleteRecord, 200)
        }
    )
    .patch(
        '/:idRecord/duplicate',
        validator("param", paramsValidator(auth.records.patch.duplicate.params)),
        async (c) => {
            const params = c.req.valid('param')

            const readRecord = await db.query.records.findFirst({
                where: and(
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.id, params.idRecord)
                ),
                columns: recordInclude,
                with: {
                    rows: true
                }
            })
            if (!readRecord) throw new HTTPException(400, { message: "L'écriture n'a pas été trouvée" })

            const [createRecord] = await db
                .insert(records)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idJournal: readRecord.idJournal,
                    idAttachment: readRecord.idAttachment,
                    isValidated: false,
                    isComputed: true,
                    label: readRecord.label,
                    date: readRecord.date,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            const newRows = readRecord.rows.map((row) => ({
                id: generateId(),
                idOrganization: c.var.organization.id,
                idYear: c.var.currentYear.id,
                idRecord: createRecord.id,
                idAccount: row.idAccount,
                label: row.label,
                debit: row.debit,
                credit: row.credit,
                lastUpdatedBy: c.var.user.id,
                createdBy: c.var.user.id
            }))
            await db
                .insert(rows)
                .values(newRows)

            return c.json(readRecord, 200)
        }
    )
    .patch(
        '/:idRecord/validate',
        validator("param", paramsValidator(auth.records.patch.validate.params)),
        async (c) => {
            const params = c.req.valid('param')

            const readRecord = await db.query.records.findFirst({
                where: and(
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.id, params.idRecord)
                ),
                columns: recordInclude,
                with: {
                    rows: true
                }
            })
            if (!readRecord) throw new HTTPException(400, { message: "L'écriture n'a pas été trouvée" })
            if (!readRecord.idAttachment) throw new HTTPException(400, { message: "Il manque une pièce jointe" })

            let totalDebit = 0
            let totalCredit = 0
            readRecord.rows.forEach((row) => {
                totalDebit += Number(row.debit)
                totalCredit += Number(row.credit)
            })
            if (Math.abs(totalDebit - totalCredit) > 0.01) throw new HTTPException(400, { message: "L'écriture n'est pas équilibrée" })

            const [validateResponse] = await db
                .update(records)
                .set({
                    isValidated: true,
                    isComputed: true,
                    validatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.id, params.idRecord)
                ))
                .returning()

            return c.json(validateResponse, 200)
        }
    )
    .patch(
        '/:idRecord/compute',
        validator("param", paramsValidator(auth.records.patch.compute.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [computeResponse] = await db
                .update(records)
                .set({
                    isComputed: not(records.isComputed),
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.id, params.idRecord),
                    eq(records.isValidated, false)
                ))
                .returning()

            return c.json(computeResponse, 200)
        }
    )
