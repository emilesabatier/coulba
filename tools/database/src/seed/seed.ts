import { DefaultComputation, DefaultSheet, defaultCompanyAccounts, defaultCompanySheets, defaultCompanyStatements, defaultComputations, defaultJournals } from '@coulba/schemas/components'
import { accountSheets, accountStatements, accounts, computationStatements, computations, journals, organizations, records, rows, sheets, statements, users, years } from '@coulba/schemas/models'
import { generateId } from '@coulba/schemas/services'
import { randFirstName } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { env } from '../env.js'
import { DefaultRecord, defaultRecords2022 } from './records2022.js'
import { defaultRecords2023 } from './records2023.js'


export function generateTemporaryPassword(): string {
    const generateHex = customAlphabet('1234567890abcdef', 8)

    return generateHex()
}


const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)


async function seed() {
    try {
        await db.transaction(async (tx) => {

            // Organizations
            console.log("Add organization")
            const newOrganization: (typeof organizations.$inferInsert) = {
                id: generateId(),
                scope: "company",
                siren: "908719503",
                name: "Millabier",
                email: "societe@millabier.com"
            }
            await tx.insert(organizations).values(newOrganization)

            // Users
            console.log("Add user")
            const passwordSalt = randomBytes(16).toString('hex')
            const invitationToken = "c5524D0e"
            const passwordHash = pbkdf2Sync(invitationToken, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            const adminUser: (typeof users.$inferInsert) = {
                id: generateId(),
                idOrganization: newOrganization.id,
                isAdmin: true,
                isActive: true,
                email: "dev@emilesabatier.com",
                isEmailValidated: true,
                alias: randFirstName(),
                passwordHash: passwordHash,
                passwordSalt: passwordSalt,
                invitationToken: invitationToken,
                isInvitationValidated: false
            }
            await tx.insert(users).values(adminUser)

            // Years
            console.log("Add years")
            const newYears: (typeof years.$inferInsert & { defaultRecords: Array<DefaultRecord> })[] = [
                {
                    id: generateId(),
                    idOrganization: newOrganization.id,
                    isSelected: true,
                    isClosed: false,
                    label: "Exercice 2022",
                    startingOn: new Date(2021, 11, 29, 0, 0).toISOString(),
                    endingOn: new Date(2022, 11, 31, 23, 59, 99).toISOString(),
                    defaultRecords: defaultRecords2022
                },
                {
                    id: generateId(),
                    idOrganization: newOrganization.id,
                    isSelected: false,
                    isClosed: false,
                    label: "Exercice 2023",
                    startingOn: new Date(2023, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2023, 11, 31, 23, 59, 99).toISOString(),
                    defaultRecords: defaultRecords2023
                },
                {
                    id: generateId(),
                    idOrganization: newOrganization.id,
                    isSelected: false,
                    isClosed: false,
                    label: "Exercice 2024",
                    startingOn: new Date(2024, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2024, 11, 31, 23, 59, 99).toISOString(),
                    defaultRecords: []
                }
            ]
            await tx.insert(years).values(newYears)


            // Journals
            console.log("Add journals")
            const newJournals: (typeof journals.$inferInsert)[] = defaultJournals.map((journal) => ({
                id: generateId(),
                idOrganization: newOrganization.id,
                code: journal.code,
                label: journal.label
            }))
            await tx.insert(journals).values(newJournals)

            for (const year of newYears) {

                // Accounts
                console.log("Add accounts")
                let newAccounts: (typeof accounts.$inferInsert)[] = defaultCompanyAccounts.map((_account) => ({
                    id: generateId(),
                    idOrganization: newOrganization.id,
                    idYear: year.id,
                    isDefault: true,
                    number: _account.number,
                    isMandatory: _account.isMandatory,
                    isClass: _account.isClass,
                    isSelectable: _account.isSelectable,
                    label: _account.label,
                    type: _account.type,
                    scope: "company"
                }))
                newAccounts = newAccounts.map((_account) => {
                    const parent = newAccounts.find((x) => x.number !== _account.number && _account.number.toString().includes(x.number.toString()) && _account.number.toString().length === x.number.toString().length + 1)

                    return ({
                        ..._account,
                        idParent: parent?.id
                    })
                })
                await tx.insert(accounts).values(newAccounts)


                // Sheets
                console.log("Add sheets")
                let newSheets: (typeof sheets.$inferInsert & { numberParent: number | undefined, accounts: DefaultSheet["accounts"][number][] })[] = defaultCompanySheets.map((_sheet) => ({
                    id: generateId(),
                    idOrganization: newOrganization.id,
                    idYear: year.id,
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
                await tx.insert(sheets).values(newSheets)


                // AccountSheets
                console.log("Add accountSheets")
                const newAccountSheets: Array<(typeof accountSheets.$inferInsert)> = []
                newSheets.forEach((_sheet) => {
                    _sheet.accounts.forEach((_account) => {
                        const account = newAccounts.find((x) => x.number === _account.number)

                        if (!account) return console.log(`Account not found ${_sheet.number} ${_account.number}`)
                        newAccountSheets.push({
                            id: generateId(),
                            idOrganization: newOrganization.id,
                            idYear: year.id,
                            idAccount: account.id,
                            idSheet: _sheet.id,
                            flow: _account.flow,
                            isAllowance: _account.isAllowance
                        })
                    })
                })
                await tx.insert(accountSheets).values(newAccountSheets)


                // Statements
                console.log("Add statements")
                let newStatements: (typeof statements.$inferInsert & { numberParent: number | undefined, accounts: number[] })[] = defaultCompanyStatements.map((_statement) => ({
                    id: generateId(),
                    idOrganization: newOrganization.id,
                    idYear: year.id,
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
                await tx.insert(statements).values(newStatements)


                // AccountStatements
                console.log("Add accountStatements")
                const newAccountStatements: Array<(typeof accountStatements.$inferInsert)> = []
                newStatements.forEach((_statement) => {
                    _statement.accounts.forEach((_account) => {
                        const account = newAccounts.find((x) => x.number === _account)

                        if (!account) return console.log(`Account not found ${_statement.number} ${_account}`)
                        // if (newAccountStatements.find(x => x.idAccount === account.id && x.idStatement == _statement.id)) console.log(_account)
                        newAccountStatements.push({
                            id: generateId(),
                            idOrganization: newOrganization.id,
                            idYear: year.id,
                            idAccount: account.id,
                            idStatement: _statement.id
                        })
                    })
                })
                await tx.insert(accountStatements).values(newAccountStatements)


                // Computations
                console.log("Add computations")
                const newComputations: (typeof computations.$inferInsert & { statements: DefaultComputation["statements"][number][] })[] = defaultComputations.map((_computation) => {
                    return ({
                        id: generateId(),
                        idOrganization: newOrganization.id,
                        idYear: year.id,
                        number: _computation.number,
                        label: _computation.label,
                        statements: _computation.statements
                    })
                })
                await tx.insert(computations).values(newComputations)


                // ComputationStatements
                console.log("Add computationStatements")
                const newComputationStatements: Array<(typeof computationStatements.$inferInsert)> = []
                newComputations.forEach((_computation) => {
                    _computation.statements.forEach((_statement) => {
                        const statement = newStatements.find((x) => x.number === _statement.number)

                        if (!statement) return console.log(`Statement not found ${_computation.number} ${_statement.number}`)
                        newComputationStatements.push({
                            id: generateId(),
                            idOrganization: newOrganization.id,
                            idYear: year.id,
                            idComputation: _computation.id,
                            idStatement: statement.id,
                            operation: _statement.operation
                        })
                    })
                })
                await tx.insert(computationStatements).values(newComputationStatements)


                // Check accounts
                newAccounts.forEach((account) => {
                    if (account.isClass) return
                    if (!account.isSelectable) return
                    // if (newAccounts.find(x => x.idParent === account.id)) return

                    const accountClass = account.number.toString().at(0) ?? ""

                    if (["1", "2", "3", "4", "5"].includes(accountClass)) {
                        const accountSheet = newAccountSheets.find((accountSheet) => accountSheet.idAccount === account.id)
                        if (!accountSheet) console.log(`Account not used (sheet) ${account.number} ${account.isMandatory}`)
                    }

                    if (["6", "7"].includes(accountClass)) {
                        const accountStatement = newAccountStatements.find((accountStatement) => accountStatement.idAccount === account.id)
                        if (!accountStatement) console.log(`Account not used (statement) ${account.number} ${account.isMandatory}`)
                    }
                })

                // Rows
                console.log("Add rows")
                const newRecords: (typeof records.$inferInsert)[] = []
                const newRows: (typeof rows.$inferInsert)[] = []
                year.defaultRecords.forEach((record) => {

                    const idRecord = generateId()
                    newRecords.push({
                        id: idRecord,
                        idOrganization: newOrganization.id,
                        idYear: year.id,
                        idJournal: undefined,
                        idAttachment: undefined,
                        isValidated: true,
                        isComputed: true,
                        validatedOn: undefined,
                        label: record.label,
                        date: record.date
                    })

                    record.rows.forEach((row) => {
                        const idAccount = newAccounts.find((account) => account.number === row.accountNumber)?.id
                        if (!idAccount) {
                            console.log("Erreur row", row)
                            return
                        }
                        newRows.push({
                            id: generateId(),
                            idOrganization: newOrganization.id,
                            idYear: year.id,
                            idAccount: idAccount,
                            idRecord: idRecord,
                            label: row.label,
                            debit: row.debit.toString(),
                            credit: row.credit.toString()
                        })
                    })

                })
                if (newRecords.length > 0 && newRows.length > 0) {
                    await tx.insert(records).values(newRecords)
                    await tx.insert(rows).values(newRows)
                }
            }
        })

    } catch (error) {
        console.log(error)
    }
}

console.log("Seeding starting.")
await seed()

process.exit()
