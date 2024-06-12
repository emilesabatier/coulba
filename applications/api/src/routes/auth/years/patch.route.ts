import { accountSheets, accountStatements, records, rows, years } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq, sql } from "drizzle-orm"
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
        '/compute-result',
        validator("json", bodyValidator(auth.years.patch.computeResult.body)),
        async (c) => {
            const body = c.req.valid('json')

            // Read all accountStatements
            const readAccountStatements = await db.query.accountStatements.findMany({
                where: and(
                    eq(accountStatements.idOrganization, c.var.user.idOrganization),
                    eq(accountStatements.idYear, c.var.currentYear.id)
                ),
                with: {
                    account: {
                        with: {
                            rows: true
                        }
                    }
                }
            })

            // Compute the year result
            const algebricYearResult = readAccountStatements.reduce((sum, accountStatement) => {
                return sum + accountStatement.account.rows.reduce((_sum, row) => {
                    if (row.idAccount !== accountStatement.idAccount) return _sum
                    return _sum + Number(row.debit) - Number(row.credit)
                }, 0)
            }, 0)
            const yearResult = {
                debit: (algebricYearResult > 0) ? algebricYearResult : 0,
                credit: (algebricYearResult < 0) ? -algebricYearResult : 0
            }

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
                        label: "Résultat de l'exercice",
                        date: c.var.currentYear.endingOn,
                        isValidated: true,
                        validatedOn: c.var.currentYear.endingOn,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // Add closing rows
                const statementRows: Array<(typeof rows.$inferInsert)> = [
                    ...readAccountStatements.map((accountStatement) => {
                        const balance = {
                            debit: 0,
                            credit: 0
                        }
                        accountStatement.account.rows.forEach((row) => {
                            if (row.idAccount !== accountStatement.idAccount) return
                            const algebricBalance = Number(row.debit) - Number(row.credit)
                            balance.debit += (algebricBalance > 0) ? algebricBalance : 0
                            balance.credit += (algebricBalance < 0) ? -algebricBalance : 0
                        })
                        return ({
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idYear: c.var.currentYear.id,
                            idRecord: createRecord.id,
                            idAccount: accountStatement.idAccount,
                            isValidated: true,
                            isComputed: false,
                            debit: balance.credit.toString(),
                            credit: balance.debit.toString(),
                            label: "Solde du compte",
                            lastUpdatedBy: c.var.user.id,
                            createdBy: c.var.user.id
                        })
                    }),
                    {
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idRecord: createRecord.id,
                        idAccount: (algebricYearResult > 0) ? body.idAccountProfit : body.idAccountLost,
                        isValidated: true,
                        isComputed: true,
                        debit: yearResult.debit.toString(),
                        credit: yearResult.credit.toString(),
                        label: "Résultat de l'exercice",
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    }
                ]
                await tx.insert(rows).values(statementRows)
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
                        label: "Clôture des comptes de bilan",
                        date: c.var.currentYear.endingOn,
                        isValidated: true,
                        validatedOn: c.var.currentYear.endingOn,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // We read the current accountSheets
                const readAccountSheets = await tx.query.accountSheets.findMany({
                    where: and(
                        eq(accountSheets.idOrganization, c.var.user.idOrganization),
                        eq(accountSheets.idYear, c.var.currentYear.id)
                    ),
                    with: {
                        account: {
                            with: {
                                rows: true
                            }
                        }
                    }
                })

                // We create the new rows
                const sheetRows = readAccountSheets.map((accountSheet) => {
                    const balance = {
                        debit: 0,
                        credit: 0
                    }
                    accountSheet.account.rows.forEach((row) => {
                        if (row.idAccount !== accountSheet.idAccount) return
                        const algebricBalance = Number(row.debit) - Number(row.credit)
                        balance.debit += (algebricBalance > 0) ? algebricBalance : 0
                        balance.credit += (algebricBalance < 0) ? -algebricBalance : 0
                    })
                    return ({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idRecord: createRecord.id,
                        idAccount: accountSheet.idAccount,
                        isValidated: true,
                        isComputed: false,
                        debit: balance.credit.toString(),
                        credit: balance.debit.toString(),
                        label: "Solde du compte",
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                })
                await tx
                    .insert(rows)
                    .values([
                        ...sheetRows,
                        {
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idYear: c.var.currentYear.id,
                            idRecord: createRecord.id,
                            idAccount: body.idAccountSheetClosing,
                            isValidated: true,
                            isComputed: false,
                            debit: sheetRows.reduce((sum, row) => sum + Number(row.credit), 0).toString(),
                            credit: sheetRows.reduce((sum, row) => sum + Number(row.debit), 0).toString(),
                            label: "Clôture du bilan",
                            lastUpdatedBy: c.var.user.id,
                            createdBy: c.var.user.id
                        }
                    ])
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
                    isClosed: sql`${!years.isClosed}`,
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
                        label: "Report du bilan de l'exercice précédent",
                        date: c.var.currentYear.startingOn,
                        isValidated: false,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // We read all previous accountSheets
                const readAccountSheets = await tx.query.accountSheets.findMany({
                    where: and(
                        eq(accountSheets.idOrganization, c.var.user.idOrganization),
                        eq(accountSheets.idYear, idPreviousYear)
                    ),
                    with: {
                        account: {
                            with: {
                                rows: true
                            }
                        }
                    }
                })

                // We create the new rows
                const sheetRows = readAccountSheets.map((accountSheet) => {
                    const balance = {
                        debit: 0,
                        credit: 0
                    }
                    accountSheet.account.rows.forEach((row) => {
                        if (row.idAccount !== accountSheet.idAccount) return
                        const algebricBalance = Number(row.debit) - Number(row.credit)
                        balance.debit += (algebricBalance > 0) ? algebricBalance : 0
                        balance.credit += (algebricBalance < 0) ? -algebricBalance : 0
                    })
                    return ({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: c.var.currentYear.id,
                        idRecord: createRecord.id,
                        idAccount: accountSheet.idAccount,
                        isValidated: true,
                        isComputed: true,
                        debit: balance.credit.toString(),
                        credit: balance.debit.toString(),
                        label: "Report de la balance du compte",
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                })
                await tx
                    .insert(rows)
                    .values([
                        ...sheetRows,
                        {
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idYear: c.var.currentYear.id,
                            idRecord: createRecord.id,
                            idAccount: body.idAccountSheetOpening,
                            isValidated: true,
                            isComputed: true,
                            debit: sheetRows.reduce((sum, row) => sum + Number(row.credit), 0).toString(),
                            credit: sheetRows.reduce((sum, row) => sum + Number(row.debit), 0).toString(),
                            label: "Ouverture du bilan",
                            lastUpdatedBy: c.var.user.id,
                            createdBy: c.var.user.id
                        }
                    ])

            })

            return c.json({}, 200)
        }
    )  
