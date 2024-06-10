import { DefaultComputation, DefaultSheet, companyAccounts, defaultComputations, defaultSheets, defaultStatements } from "@coulba/schemas/components"
import { accountSheets, accountStatements, accounts, computationStatements, computations, sheets, statements, years } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const yearsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.years.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            // Generate data
            const createYear = await db.transaction(async (tx) => {

                const [createYear] = await tx
                    .insert(years)
                    .values({
                        id: generateId(),
                        idPreviousYear: body.idPreviousYear,
                        isSelected: false,
                        idOrganization: c.var.organization.id,
                        label: body.label,
                        startingOn: body.startingOn,
                        endingOn: body.endingOn,
                        isMinimalSystem: body.isMinimalSystem,
                        lastUpdatedBy: c.var.user.id,
                        createdBy: c.var.user.id
                    })
                    .returning()

                // Add accounts
                let newAccounts: Array<(typeof accounts.$inferInsert)> = []
                // const defaultAccounts = (c.var.organization.scope === "association") ? associationAccounts : companyAccounts
                const defaultAccounts = companyAccounts

                defaultAccounts
                    .filter((account) => {
                        if (account.isMandatory && !c.var.currentYear.isMinimalSystem) return false
                        return true
                    })
                    .forEach((_account) => {
                        newAccounts.push({
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idYear: createYear.id,
                            number: _account.number,
                            isMandatory: _account.isMandatory,
                            isClass: _account.isClass,
                            isSelectable: _account.isSelectable,
                            label: _account.label,
                            type: _account.type,
                            scope: c.var.organization.scope
                        })
                    })
                newAccounts = newAccounts.map((_account) => {
                    const parent = newAccounts.find((x) => x.number !== _account.number && _account.number.toString().includes(x.number.toString()) && _account.number.toString().length === x.number.toString().length + 1)
                    return ({
                        ..._account,
                        idParent: parent?.id
                    })
                })
                if (newAccounts.length > 0) {
                    await tx
                        .insert(accounts)
                        .values(newAccounts)
                }


                // Add sheets
                let newSheets: (typeof sheets.$inferInsert & { numberParent: number | undefined, accounts: DefaultSheet["accounts"][number][] })[] = defaultSheets.map((_sheet) => ({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: createYear.id,
                    side: _sheet.side,
                    number: _sheet.number,
                    label: _sheet.label,
                    numberParent: _sheet.numberParent,
                    accounts: _sheet.accounts
                }))
                newSheets = newSheets.map((_sheet) => {
                    const parent = newSheets.find((x) => (x.number === _sheet.numberParent) && (x.side === _sheet.side))
                    return ({
                        ..._sheet,
                        idParent: parent?.id
                    })
                })
                if (newSheets.length > 0) {
                    await tx
                        .insert(sheets)
                        .values(newSheets)
                }


                // Add accountSheets
                const newAccountSheets: Array<(typeof accountSheets.$inferInsert)> = []
                newSheets.forEach((_sheet) => {
                    _sheet.accounts.forEach((_account) => {
                        const account = newAccounts.find((x) => x.number === _account.number)
                        if (!account) return
                        newAccountSheets.push({
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idAccount: account.id,
                            idSheet: _sheet.id,
                            flow: _account.flow,
                            isAllowance: _account.isAllowance
                        })
                    })
                })
                if (newAccountSheets.length > 0) {
                    await tx
                        .insert(accountSheets)
                        .values(newAccountSheets)
                }


                // Add statements
                let newStatements: (typeof statements.$inferInsert & { numberParent: number | undefined, accounts: number[] })[] = defaultStatements.map((_statement) => ({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: createYear.id,
                    number: _statement.number,
                    label: _statement.label,
                    numberParent: _statement.numberParent,
                    accounts: _statement.accounts
                }))
                newStatements = newStatements.map((_statement) => {
                    const parent = newStatements.find((x) => x.number === _statement.numberParent)
                    return ({
                        ..._statement,
                        idParent: parent?.id
                    })
                })
                if (newStatements.length > 0) {
                    await tx
                        .insert(statements)
                        .values(newStatements)
                }


                // Add accountStatements
                const newAccountStatements: Array<(typeof accountStatements.$inferInsert)> = []
                newStatements.forEach((_statement) => {
                    _statement.accounts.forEach((_account) => {
                        const account = newAccounts.find((x) => x.number === _account)
                        if (!account) return
                        newAccountStatements.push({
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idAccount: account.id,
                            idStatement: _statement.id
                        })
                    })
                })
                if (newAccountStatements.length > 0) {
                    await tx
                        .insert(accountStatements)
                        .values(newAccountStatements)
                }


                // Add computations
                const newComputations: (typeof computations.$inferInsert & { statements: DefaultComputation["statements"][number][] })[] = defaultComputations.map((_computation) => {
                    return ({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: createYear.id,
                        number: _computation.number,
                        label: _computation.label,
                        statements: _computation.statements
                    })
                })
                if (newComputations.length > 0) {
                    await tx
                        .insert(computations)
                        .values(newComputations)
                }


                // Add computationStatements
                const newComputationStatements: Array<(typeof computationStatements.$inferInsert)> = []
                newComputations.forEach((_computation) => {
                    _computation.statements.forEach((_statement) => {
                        const statement = newStatements.find((x) => x.number === _statement.number)
                        if (!statement) return
                        newComputationStatements.push({
                            id: generateId(),
                            idOrganization: c.var.organization.id,
                            idComputation: _computation.id,
                            idStatement: statement.id,
                            operation: _statement.operation
                        })
                    })
                })
                if (newComputationStatements.length > 0) {
                    await tx
                        .insert(computationStatements)
                        .values(newComputationStatements)
                }

                return createYear
            })


            return c.json(createYear, 200)
        }
    )
    .get(
        "/:idYear?",
        validator("param", paramsValidator(auth.years.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idYear) {
                const readYears = await db
                    .select()
                    .from(years)
                    .where(eq(years.idOrganization, c.var.user.idOrganization))

                return c.json(readYears, 200)
            }

            const [readYear] = await db
                .select()
                .from(years)
                .where(and(
                    eq(years.idOrganization, c.var.user.idOrganization),
                    eq(years.id, params.idYear)
                ))

            return c.json(readYear, 200)
        }
    )
    .put(
        '/:idYear',
        validator("param", paramsValidator(auth.years.put.params)),
        validator("json", bodyValidator(auth.years.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateYear] = await db
                .update(years)
                .set({
                    idPreviousYear: body.idPreviousYear,
                    isSelected: body.isSelected,
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(years.idOrganization, c.var.user.idOrganization),
                    eq(years.id, params.idYear)
                ))
                .returning()

            return c.json(updateYear, 200)
        }
    )
    .delete(
        '/:idYear',
        validator("param", paramsValidator(auth.years.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteYear] = await db
                .delete(years)
                .where(and(
                    eq(years.idOrganization, c.var.user.idOrganization),
                    eq(years.id, params.idYear),
                    eq(years.isSelected, false)
                ))
                .returning()

            return c.json(deleteYear, 200)
        }
    )
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
        '/:idYear/close',
        validator("param", paramsValidator(auth.years.patch.close.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [updateYear] = await db
                .update(years)
                .set({
                    isClosed: true,
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
