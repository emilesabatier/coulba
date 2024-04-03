import { accounts, companies, journals, records, sheets, statements, users, years } from '@coulba/schemas/models'
import { generateId } from '@coulba/schemas/services'
import { randFirstName, randFullName } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { env } from '../env'
import { DefaultAccount, defaultAccounts } from './accounts'
import { defaultRecords } from './records'
import { DefaultSheet, defaultSheets } from './sheets'
import { DefaultStatement, defaultStatements } from './statements'


export function generateTemporaryPassword(): string {
    const generateHex = customAlphabet('1234567890abcdef', 8)

    return generateHex()
}


const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)

function flatSheets(_sheets: DefaultSheet[], idCompany: string, idYear: string, idSheetParent?: string) {
    const flatArray = _sheets.flatMap((_sheet) => {
        const id = generateId()
        return ([
            {
                id: id,
                idCompany: idCompany,
                idYear: idYear,
                idSheetParent: idSheetParent,
                side: _sheet.side,
                number: _sheet.number,
                label: _sheet.label,
                accounts: _sheet.accounts
            },
            ...flatSheets(_sheet.sheets, idCompany, idYear, id)
        ])
    }) as (typeof sheets.$inferInsert & { accounts: number[] })[]
    return flatArray as (typeof sheets.$inferInsert & { accounts: number[] })[]
}

function flatStatements(_statements: DefaultStatement[], idCompany: string, idYear: string, idStatementParent?: string) {
    const flatArray = _statements.flatMap((_statement) => {
        const id = generateId()
        return ([
            {
                id: id,
                idCompany: idCompany,
                idYear: idYear,
                idStatementParent: idStatementParent,
                number: _statement.number,
                label: _statement.label,
                accounts: _statement.accounts
            },
            ...flatStatements(_statement.statements, idCompany, idYear, id)
        ])
    }) as (typeof statements.$inferInsert & { accounts: number[] })[]
    return flatArray as (typeof statements.$inferInsert & { accounts: number[] })[]
}


function flatAccounts(newSheets: (typeof sheets.$inferInsert & { accounts: number[] })[], newStatements: (typeof statements.$inferInsert & { accounts: number[] })[], _accounts: DefaultAccount[], idCompany: string, idYear: string, idAccountParent?: string) {
    const flatArray = _accounts.flatMap((_account) => {
        const id = generateId()
        const sheet = newSheets.find((_sheet) => _sheet.accounts.includes(_account.number))
        const statement = newStatements.find((_statement) => _statement.accounts.includes(_account.number))

        return ([
            {
                id: id,
                idCompany: idCompany,
                idYear: idYear,
                idSheet: sheet?.id,
                idStatement: statement?.id,
                idAccountParent: idAccountParent,
                number: _account.number,
                label: _account.label
            },
            ...flatAccounts(newSheets, newStatements, _account.accounts, idCompany, idYear, id)
        ])
    }) as (typeof accounts.$inferInsert)[]
    return flatArray as (typeof accounts.$inferInsert)[]
}


async function seed() {
    try {
        await db.transaction(async (tx) => {


            // Companies
            console.log("Add company")
            const newCompany: (typeof companies.$inferInsert) = {
                id: generateId(),
                siren: "123123123",
                name: "MaSociétéDémo",
                address: "13 rue des grands champs, 75000 Paris",
                email: "demo@coulba.fr"
            }
            await tx.insert(companies).values(newCompany)


            // Years
            console.log("Add years")
            const idCurrentYear = generateId()
            const newYears: (typeof years.$inferInsert)[] = [
                {
                    id: idCurrentYear,
                    idCompany: newCompany.id,
                    isSelected: true,
                    label: "Exercice 2024",
                    startingOn: new Date(2024, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2024, 11, 31, 23, 99, 99).toISOString()
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    isSelected: false,
                    label: "Exercice 2023",
                    startingOn: new Date(2023, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2023, 11, 31, 23, 99, 99).toISOString()
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    isSelected: false,
                    label: "Exercice 2022",
                    startingOn: new Date(2022, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2022, 11, 31, 23, 99, 99).toISOString()
                }
            ]
            await tx.insert(years).values(newYears)


            // Journals
            console.log("Add journals")
            const newJournals: (typeof journals.$inferInsert)[] = [
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    acronym: "VT",
                    label: "Ventes"
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    acronym: "HA",
                    label: "Achats"
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    acronym: "SL",
                    label: "Salaires"
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    acronym: "BQ",
                    label: "Banque"
                },
            ]
            await tx.insert(journals).values(newJournals)


            // Sheets
            console.log("Add sheets")
            const newSheets: (typeof sheets.$inferInsert & { accounts: number[] })[] = flatSheets(defaultSheets, newCompany.id, idCurrentYear)
            await tx.insert(sheets).values(newSheets)


            // Accounts
            console.log("Add statements")
            const newStatements: (typeof statements.$inferInsert & { accounts: number[] })[] = flatStatements(defaultStatements, newCompany.id, idCurrentYear)
            await tx.insert(statements).values(newStatements)


            // Accounts
            console.log("Add accounts")
            const newAccounts: (typeof accounts.$inferInsert)[] = flatAccounts(newSheets, newStatements, defaultAccounts, newCompany.id, idCurrentYear)
            await tx.insert(accounts).values(newAccounts)


            // Users
            console.log("Add user")
            const passwordSalt = randomBytes(16).toString('hex')
            const invitationToken = "c5524D0e"
            const passwordHash = pbkdf2Sync(invitationToken, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            const adminUser: (typeof users.$inferInsert) = {
                id: generateId(),
                idCompany: newCompany.id,
                isAdmin: true,
                isActive: true,
                email: "demo@coulba.com",
                isEmailValidated: false,
                forename: randFirstName(),
                surname: randFullName(),
                passwordHash: passwordHash,
                passwordSalt: passwordSalt,
                invitationToken: invitationToken
            }
            await tx.insert(users).values(adminUser)


            // Records
            console.log("Add records")
            const newRecords: (typeof records.$inferInsert)[] = defaultRecords.flatMap((record) => {
                const idAccount = newAccounts.find((account) => account.number === record.accountNumber)?.id
                if (!idAccount) {
                    console.log("Erreur record", record)
                    return []
                }
                return ([{
                    id: generateId(),
                    idCompany: newCompany.id,
                    idYear: idCurrentYear,
                    idAccount: idAccount,
                    label: record.label,
                    date: record.date,
                    debit: record.debit.toString(),
                    credit: record.credit.toString()
                }])
            })
            await tx.insert(records).values(newRecords)
        })

    } catch (error) {
        console.log(error)
    }
}

console.log("Seeding starting.")
await seed()

process.exit()
