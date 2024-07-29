import { accountSheets, accountStatements, accounts, computationStatements, computations, sheets, statements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { HTTPException } from "hono/http-exception"
import * as v from "valibot"
import { db } from "../../../clients/db.js"


type GenerateLastYearData = {
    organization: v.Output<typeof auth.organizations.get.return>
    year: v.Output<typeof auth.years.get.return>
}

export async function generateLastYearData(props: GenerateLastYearData) {

    if (!props.year.idPreviousYear) throw new HTTPException(500, { message: "L'id de l'année précédente n'est pas renseigné" })

    // Add accounts
    const lastYearAccounts = await db
        .select()
        .from(accounts)
        .where(and(
            eq(accounts.idOrganization, props.organization.id),
            eq(accounts.idYear, props.year.idPreviousYear)
        ))
    const newAccounts: Array<typeof accounts.$inferInsert> = lastYearAccounts.map((account) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        idParent: account.idParent,
        number: account.number,
        isMandatory: account.isMandatory,
        isClass: account.isClass,
        isDefault: account.isDefault,
        isSelectable: account.isSelectable,
        label: account.label,
        type: account.type,
        scope: account.scope
    }))
    if (newAccounts.length > 0) {
        await db
            .insert(accounts)
            .values(newAccounts)
    }

    // Add sheets
    const lastYearSheets = await db
        .select()
        .from(sheets)
        .where(and(
            eq(sheets.idOrganization, props.organization.id),
            eq(sheets.idYear, props.year.idPreviousYear)
        ))
    const newSheets: Array<typeof sheets.$inferInsert> = lastYearSheets.map((sheet) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        idParent: sheet.idParent,
        isDefault: sheet.isDefault,
        side: sheet.side,
        number: sheet.number,
        label: sheet.label,
        addedGrossAmount: "0",
        addedAllowanceAmount: "0"
    }))
    if (newSheets.length > 0) {
        await db
            .insert(sheets)
            .values(newSheets)
    }


    // Add accountSheets
    const lastYearAccountSheets = await db
        .select()
        .from(accountSheets)
        .where(and(
            eq(accountSheets.idOrganization, props.organization.id),
            eq(accountSheets.idYear, props.year.idPreviousYear)
        ))
    const newAccountSheets: Array<(typeof accountSheets.$inferInsert)> = lastYearAccountSheets.map((accountSheet) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        idAccount: accountSheet.idAccount,
        idSheet: accountSheet.idSheet,
        flow: accountSheet.flow,
        isAllowance: accountSheet.isAllowance
    })
    )
    if (newAccountSheets.length > 0) {
        await db
            .insert(accountSheets)
            .values(newAccountSheets)
    }


    // Add statements
    const lastYearStatements = await db
        .select()
        .from(statements)
        .where(and(
            eq(statements.idOrganization, props.organization.id),
            eq(statements.idYear, props.year.idPreviousYear)
        ))
    const newStatements: Array<typeof statements.$inferInsert> = lastYearStatements.map((statement) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        idParent: statement.idParent,
        isDefault: statement.isDefault,
        number: statement.number,
        label: statement.label,
        addedNetAmount: "0"
    }))
    if (newStatements.length > 0) {
        await db
            .insert(statements)
            .values(newStatements)
    }


    // Add accountStatements
    const lastYearAccountStatements = await db
        .select()
        .from(accountStatements)
        .where(and(
            eq(accountStatements.idOrganization, props.organization.id),
            eq(accountStatements.idYear, props.year.idPreviousYear)
        ))
    const newAccountStatements: Array<(typeof accountStatements.$inferInsert)> = lastYearAccountStatements.map((accountStatement) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        idAccount: accountStatement.idAccount,
        idStatement: accountStatement.idStatement
    })
    )
    if (newAccountStatements.length > 0) {
        await db
            .insert(accountStatements)
            .values(newAccountStatements)
    }


    // Add computations
    const lastYearComputations = await db
        .select()
        .from(computations)
        .where(and(
            eq(computations.idOrganization, props.organization.id),
            eq(computations.idYear, props.year.idPreviousYear)
        ))
    const newComputations: Array<typeof computations.$inferInsert> = lastYearComputations.map((computation) => {
        return ({
            id: generateId(),
            idOrganization: props.organization.id,
            idYear: props.year.id,
            number: computation.number,
            label: computation.label
        })
    })
    if (newComputations.length > 0) {
        await db
            .insert(computations)
            .values(newComputations)
    }


    // Add computationStatements
    const lastYearComputationStatements = await db
        .select()
        .from(computationStatements)
        .where(and(
            eq(computationStatements.idOrganization, props.organization.id),
            eq(computationStatements.idYear, props.year.idPreviousYear)
        ))
    const newComputationStatements: Array<(typeof computationStatements.$inferInsert)> = lastYearComputationStatements.map((computationStatement) => ({
        id: generateId(),
        idOrganization: props.organization.id,
        idYear: props.year.id,
        idComputation: computationStatement.idComputation,
        idStatement: computationStatement.idStatement,
        operation: computationStatement.operation
    })
    )
    if (newComputationStatements.length > 0) {
        await db
            .insert(computationStatements)
            .values(newComputationStatements)
    }
}