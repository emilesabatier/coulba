import { accounts, records, rows, years } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq, not } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../../clients/db.js"
import { bodyValidator } from "../../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../../middlewares/checkAuth.js"
import { paramsValidator } from "../../../middlewares/paramsValidator.js"


export const yearPatchRoutes = new Hono<AuthEnv>()
    .patch(
        '/:idYear/switch',
        validator("param", paramsValidator(auth.years.patch.switch.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (c.var.currentYear !== undefined) {
                await db
                    .update(years)
                    .set({
                        isSelected: false,
                        lastUpdatedBy: c.var.user.id,
                        lastUpdatedOn: new Date().toISOString()
                    })
                    .where(and(
                        eq(years.idOrganization, c.var.organization.id),
                        eq(years.id, c.var.currentYear.id)
                    ))
            }

            const [updateYear] = await db
                .update(years)
                .set({
                    isSelected: true,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(years.idOrganization, c.var.organization.id),
                    eq(years.id, params.idYear)
                ))
                .returning()

            return c.json(updateYear, 200)
        }
    )
    .patch(
        '/settle-statement',
        validator("json", bodyValidator(auth.years.patch.settleStatement.body)),
        async (c) => {
            const body = c.req.valid('json')

            // // Check if sheet is balanced
            // let totalAssets = 0
            // let totalLiabilities = 0
            // readAccountSheets.forEach((accountSheet) => {
            //     if (accountSheet.sheet.side === "asset") return totalAssets += Number(accountSheet.sheet.gross) - Number(accountSheet.sheet.allowance)
            //     if (accountSheet.sheet.side === "liability") return totalLiabilities += Number(accountSheet.sheet.gross) - Number(accountSheet.sheet.allowance)
            // })
            // if (totalAssets !== totalLiabilities + yearResult) throw new HTTPException(400, { message: "Le bilan n'est pas équilibré" })

            await db.transaction(async (tx) => {

                // We delete the previsou record if existing
                await tx
                    .delete(records)
                    .where(and(
                        eq(records.idOrganization, c.var.user.idOrganization),
                        eq(records.idYear, c.var.currentYear.id),
                        eq(records.idAutomatic, "COMPUTE_RESULT")
                    ))

                // Add result record
                const [createRecord] = await tx
                    .insert(records)
                    .values({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idJournal: body.idJournalClosing,
                        idAutomatic: "COMPUTE_RESULT",
                        isValidated: true,
                        isComputed: false,
                        label: "Solde des comptes de gestion",
                        date: c.var.currentYear.endingOn,
                        validatedOn: c.var.currentYear.endingOn,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // We read the current accounts
                const readAccounts = await tx.query.accounts.findMany({
                    where: and(
                        eq(accounts.idOrganization, c.var.user.idOrganization),
                        eq(accounts.idYear, c.var.currentYear.id)
                    ),
                    with: {
                        rows: {
                            with: {
                                record: true
                            }
                        },
                        accountStatements: true
                    }
                })

                // Add closing rows
                const statementRows: Array<(typeof rows.$inferInsert)> = []
                readAccounts.forEach((account) => {
                    if (account.accountStatements.length === 0) return

                    const sum = {
                        debit: 0,
                        credit: 0
                    }

                    account.rows.forEach((row) => {
                        if (!row.record.isComputed) return
                        sum.debit += Number(row.debit)
                        sum.credit += Number(row.credit)
                    })

                    const algebricBalance = Number(sum.debit) - Number(sum.credit)
                    if (Math.abs(algebricBalance) < 0.01) return
                    const balance = {
                        debit: (algebricBalance > 0) ? algebricBalance : 0,
                        credit: (algebricBalance < 0) ? -algebricBalance : 0
                    }
                    statementRows.push({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idRecord: createRecord.id,
                        idAccount: account.id,
                        debit: balance.credit.toString(),
                        credit: balance.debit.toString(),
                        label: "Solde du compte",
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                })
                const algebricBalance = statementRows.reduce((sum, row) => sum + Number(row.debit), 0) - statementRows.reduce((sum, row) => sum + Number(row.credit), 0)
                const balance = {
                    debit: (algebricBalance > 0) ? algebricBalance : 0,
                    credit: (algebricBalance < 0) ? -algebricBalance : 0
                }

                if (statementRows.length === 0) throw new HTTPException(400, { message: "Aucune écriture ne peut être passée" })
                await tx
                    .insert(rows)
                    .values([
                        ...statementRows,
                        {
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idYear: c.var.currentYear.id,
                            idRecord: createRecord.id,
                            idAccount: (algebricBalance < 0) ? body.idAccountLoss : body.idAccountProfit,
                            debit: balance.credit.toString(),
                            credit: balance.debit.toString(),
                            label: "Résultat de l'exercice",
                            lastUpdatedBy: c.var.user.id,
                            createdBy: c.var.user.id
                        }
                    ])
            })

            return c.json({}, 200)
        }
    )
    .patch(
        '/settle-sheet',
        validator("json", bodyValidator(auth.years.patch.settleSheet.body)),
        async (c) => {
            const body = c.req.valid('json')

            await db.transaction(async (tx) => {

                // We delete previous record if existing
                await tx
                    .delete(records)
                    .where(and(
                        eq(records.idOrganization, c.var.user.idOrganization),
                        eq(records.idYear, c.var.currentYear.id),
                        eq(records.idAutomatic, "SETTLE_SHEET")
                    ))

                // We create the new record
                const [createRecord] = await tx
                    .insert(records)
                    .values({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idJournal: body.idJournalClosing,
                        idAutomatic: "SETTLE_SHEET",
                        isValidated: true,
                        isComputed: false,
                        label: "Solde des comptes de bilan",
                        date: c.var.currentYear.endingOn,
                        validatedOn: c.var.currentYear.endingOn,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // We read the current accounts
                const readAccounts = await tx.query.accounts.findMany({
                    where: and(
                        eq(accounts.idOrganization, c.var.user.idOrganization),
                        eq(accounts.idYear, c.var.currentYear.id)
                    ),
                    with: {
                        rows: {
                            with: {
                                record: true
                            }
                        },
                        accountSheets: true
                    }
                })

                // We create the new rows
                const sheetRows: Array<(typeof rows.$inferInsert)> = []
                readAccounts.forEach((account) => {
                    if (account.accountSheets.length === 0) return

                    const sum = {
                        debit: 0,
                        credit: 0
                    }
                    account.rows.forEach((row) => {
                        if (!row.record.isComputed) return
                        sum.debit += Number(row.debit)
                        sum.credit += Number(row.credit)
                    })

                    const algebricBalance = Number(sum.debit) - Number(sum.credit)
                    if (Math.abs(algebricBalance) < 0.01) return
                    const balance = {
                        debit: (algebricBalance > 0) ? algebricBalance : 0,
                        credit: (algebricBalance < 0) ? -algebricBalance : 0
                    }
                    sheetRows.push({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idRecord: createRecord.id,
                        idAccount: account.id,
                        debit: balance.credit.toString(),
                        credit: balance.debit.toString(),
                        label: "Solde du compte",
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                })
                if (sheetRows.length === 0) throw new HTTPException(400, { message: "Aucune écriture ne peut être passée" })
                await tx
                    .insert(rows)
                    .values(sheetRows)
            })

            return c.json({}, 200)
        }
    )
    .patch(
        '/close',
        async (c) => {

            const [updateYear] = await db
                .update(years)
                .set({
                    isClosed: not(years.isClosed),
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(years.idOrganization, c.var.organization.id),
                    eq(years.id, c.var.currentYear.id)
                ))
                .returning()

            return c.json(updateYear, 200)
        }
    )
    .patch(
        '/open',
        validator("json", bodyValidator(auth.years.patch.open.body)),
        async (c) => {
            const body = c.req.valid('json')

            const idPreviousYear = c.var.currentYear.idPreviousYear
            if (!idPreviousYear) throw new HTTPException(400, { message: "Aucun exercice précédent n'est déclaré" })

            await db.transaction(async (tx) => {

                // We delete, if existing, the previous opening record
                await tx
                    .delete(records)
                    .where(and(
                        eq(records.idOrganization, c.var.user.idOrganization),
                        eq(records.idYear, c.var.currentYear.id),
                        eq(records.idAutomatic, "OPEN_SHEET")
                    ))

                // We create the new opening record
                const [createRecord] = await tx
                    .insert(records)
                    .values({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idJournal: body.idJournalOpening,
                        idAutomatic: "OPEN_SHEET",
                        isValidated: true,
                        isComputed: true,
                        label: "Report du bilan de l'exercice précédent",
                        date: c.var.currentYear.startingOn,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // We read the current accounts
                const readRecord = await tx.query.records.findFirst({
                    where: and(
                        eq(records.idOrganization, c.var.user.idOrganization),
                        eq(records.idYear, idPreviousYear),
                        eq(records.idAutomatic, "SETTLE_SHEET")
                    ),
                    with: {
                        rows: {
                            with: {
                                account: true
                            }
                        },
                    }
                })
                if (!readRecord) throw new HTTPException(400, { message: "Le solde du bilan de l'exercice précédent n'a pas été trouvé" })

                const readAccounts = await tx.query.accounts.findMany({
                    where: and(
                        eq(records.idOrganization, c.var.user.idOrganization),
                        eq(records.idYear, c.var.currentYear.id)
                    )
                })

                // We create the new rows
                const sheetRows: Array<(typeof rows.$inferInsert)> = []
                readRecord.rows.forEach((row) => {
                    const account = readAccounts.find((_account) => _account.number === row.account.number)
                    if (!account) throw new HTTPException(400, { message: "Les comptes liés n'ont pas été rapprochés" })
                    sheetRows.push({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idRecord: createRecord.id,
                        idAccount: account.id,
                        debit: row.credit.toString(),
                        credit: row.debit.toString(),
                        label: "Report du compte",
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                })
                await tx
                    .insert(rows)
                    .values(sheetRows)

            })

            return c.json({}, 200)
        }
    )  
