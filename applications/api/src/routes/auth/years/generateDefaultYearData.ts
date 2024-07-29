import { DefaultComputation, DefaultSheet, defaultAssociationAccounts, defaultAssociationSheets, defaultAssociationStatements, defaultCompanyAccounts, defaultCompanySheets, defaultCompanyStatements, defaultComputations } from "@coulba/schemas/components"
import { accountSheets, accountStatements, accounts, computationStatements, computations, sheets, statements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import * as v from "valibot"
import { db } from "../../../clients/db.js"


type GenerateDefaultYearData = {
    organization: v.Output<typeof auth.organizations.get.return>
    year: v.Output<typeof auth.years.get.return>
}

export async function generateDefaultYearData(props: GenerateDefaultYearData) {

    // Add accounts
    let newAccounts: Array<(typeof accounts.$inferInsert)> = []
    const defaultAccounts = (props.organization.scope === "association") ? defaultAssociationAccounts : defaultCompanyAccounts
    const defaultSheets = (props.organization.scope === "association") ? defaultAssociationSheets : defaultCompanySheets
    const defaultStatements = (props.organization.scope === "association") ? defaultAssociationStatements : defaultCompanyStatements

    defaultAccounts
        .filter((account) => {
            if (!account.isMandatory && props.year.isMinimalSystem) return false
            return true
        })
        .forEach((_account) => {
            newAccounts.push({
                id: generateId(),
                idOrganization: props.organization.id,
                idYear: props.year.id,
                number: _account.number,
                isMandatory: _account.isMandatory,
                isClass: _account.isClass,
                isDefault: true,
                isSelectable: _account.isSelectable,
                label: _account.label,
                type: _account.type,
                scope: props.organization.scope
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
        await db
            .insert(accounts)
            .values(newAccounts)
    }


    // Add sheets
    let newSheets: (typeof sheets.$inferInsert & { numberParent: number | undefined, accounts: DefaultSheet["accounts"][number][] })[] = defaultSheets.map((_sheet) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        isDefault: true,
        side: _sheet.side,
        number: _sheet.number,
        label: _sheet.label,
        addedGrossAmount: "0",
        addedAllowanceAmount: "0",
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
        await db
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
                idOrganization: props.organization.id,
                idYear: props.year.id,
                idAccount: account.id,
                idSheet: _sheet.id,
                flow: _account.flow,
                isAllowance: _account.isAllowance
            })
        })
    })
    if (newAccountSheets.length > 0) {
        await db
            .insert(accountSheets)
            .values(newAccountSheets)
    }


    // Add statements
    let newStatements: (typeof statements.$inferInsert & { numberParent: number | undefined, accounts: number[] })[] = defaultStatements.map((_statement) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        isDefault: true,
        number: _statement.number,
        label: _statement.label,
        addedNetAmount: "0",
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
        await db
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
                idOrganization: props.organization.id,
                idYear: props.year.id,
                idAccount: account.id,
                idStatement: _statement.id
            })
        })
    })
    if (newAccountStatements.length > 0) {
        await db
            .insert(accountStatements)
            .values(newAccountStatements)
    }


    // Add computations
    const newComputations: (typeof computations.$inferInsert & { statements: DefaultComputation["statements"][number][] })[] = defaultComputations.map((_computation) => {
        return ({
            id: generateId(),
            idOrganization: props.organization.id,
            idYear: props.year.id,
            number: _computation.number,
            label: _computation.label,
            statements: _computation.statements
        })
    })
    if (newComputations.length > 0) {
        await db
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
                idOrganization: props.organization.id,
                idYear: props.year.id,
                idComputation: _computation.id,
                idStatement: statement.id,
                operation: _statement.operation
            })
        })
    })
    if (newComputationStatements.length > 0) {
        await db
            .insert(computationStatements)
            .values(newComputationStatements)
    }
}