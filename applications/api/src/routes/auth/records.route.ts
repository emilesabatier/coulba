import { accountSheets, accountStatements, accounts, rows, sheets, statements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq, sql } from "drizzle-orm"
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
                    idOrganization: c.var.organization.id,
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
        '/:idRecord/validate',
        checkCurrentYear,
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
            if (!readRecord) throw new HTTPException(403, { message: "L'écriture n'a pas été trouvée" })
            // if (!readRecord.idAttachment) throw new HTTPException(403, { message: "Il manque une pièce jointe" })

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
                        eq(records.idOrganization, c.var.user.idOrganization),
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
                        eq(rows.idOrganization, c.var.user.idOrganization),
                        eq(rows.idRecord, params.idRecord)
                    ))

                for (const row of readRecord.rows) {

                    // Update account
                    const [account] = await tx
                        .update(accounts)
                        .set({
                            debit: sql`${accounts.debit} + ${row.debit}`,
                            credit: sql`${accounts.credit} + ${row.credit}`,
                            lastUpdatedBy: c.var.user.id,
                            lastUpdatedOn: new Date().toISOString()
                        })
                        .where(and(
                            eq(accounts.idOrganization, c.var.user.idOrganization),
                            eq(accounts.idYear, readRecord.idYear),
                            eq(accounts.id, row.idAccount)
                        ))
                        .returning()


                    const balance = Number(row.debit) - Number(row.credit)

                    // Update sheet
                    if (["1", "2", "3", "4", "5"].includes(account.number.toString().at(0) ?? "")) {
                        const readAccountSheets = await db.query.accountSheets.findMany({
                            where: and(
                                eq(accountSheets.idOrganization, c.var.user.idOrganization),
                                eq(accountSheets.idAccount, row.idAccount)
                            ),
                            with: { sheet: true }
                        })
                        for (const accountSheet of readAccountSheets) {
                            await tx
                                .update(sheets)
                                .set({
                                    gross: sql`${sheets.gross} + ${accountSheet.isAllowance ? 0 : Math.abs(balance)}`,
                                    allowance: sql`${sheets.allowance} + ${accountSheet.isAllowance ? Math.abs(balance) : 0}`,
                                    lastUpdatedBy: c.var.user.id,
                                    lastUpdatedOn: new Date().toISOString()
                                })
                                .where(and(
                                    eq(sheets.idOrganization, c.var.user.idOrganization),
                                    eq(sheets.idYear, readRecord.idYear),
                                    eq(sheets.id, accountSheet.idSheet)
                                ))
                        }
                    }

                    // Update statement 
                    if (["6", "7"].includes(account.number.toString().at(0) ?? "")) {
                        const readAccountStatements = await db.query.accountStatements.findMany({
                            where: and(
                                eq(accountStatements.idOrganization, c.var.user.idOrganization),
                                eq(accountStatements.idAccount, row.idAccount)
                            ),
                            with: { statement: true }
                        })
                        for (const accountStatement of readAccountStatements) {
                            await tx
                                .update(statements)
                                .set({
                                    net: sql`${statements.net} + ${balance}`,
                                    lastUpdatedBy: c.var.user.id,
                                    lastUpdatedOn: new Date().toISOString()
                                })
                                .where(and(
                                    eq(statements.idOrganization, c.var.user.idOrganization),
                                    eq(statements.idYear, readRecord.idYear),
                                    eq(statements.id, accountStatement.idStatement)
                                ))
                        }
                    }
                }
            })

            return c.json({}, 200)
        }
    )
