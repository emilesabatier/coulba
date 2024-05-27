import { defaultAccounts, DefaultComputation, defaultComputations, DefaultSheet, defaultSheets, defaultStatements } from '@coulba/schemas/components'
import { accounts, accountSheets, companies, computations, computationStatements, journals, sheets, statements, transactions, users, years } from '@coulba/schemas/models'
import { generateId } from '@coulba/schemas/services'
import { randFirstName } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { env } from '../env'
import { defaultTransactions } from './transactions'


export function generateTemporaryPassword(): string {
    const generateHex = customAlphabet('1234567890abcdef', 8)

    return generateHex()
}


const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)


async function seed() {
    try {
        await db.transaction(async (tx) => {


            // Companies
            console.log("Add company")
            const newCompany: (typeof companies.$inferInsert) = {
                id: generateId(),
                siren: null,
                name: null,
                email: null
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
                    endingOn: new Date(2024, 11, 31, 12, 0, 0).toISOString(),
                    system: "developed"
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
            let newSheets: (typeof sheets.$inferInsert & { numberParent: number | undefined, accounts: DefaultSheet["accounts"][number][] })[] = defaultSheets.map((_sheet) => ({
                id: generateId(),
                idCompany: newCompany.id,
                idYear: idCurrentYear,
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
            await tx.insert(sheets).values(newSheets)


            // Statements
            console.log("Add statements")
            let newStatements: (typeof statements.$inferInsert & { numberParent: number | undefined, accounts: number[] })[] = defaultStatements.map((_statement) => ({
                id: generateId(),
                idCompany: newCompany.id,
                idYear: idCurrentYear,
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
            await tx.insert(statements).values(newStatements)


            // Computations
            console.log("Add computations")
            const newComputations: (typeof computations.$inferInsert & { statements: DefaultComputation["statements"][number][] })[] = defaultComputations.map((_computation) => {
                return ({
                    id: generateId(),
                    idCompany: newCompany.id,
                    idYear: idCurrentYear,
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

                    if (!statement) throw new Error(`Erreur ${_computation.number} ${_statement.number}`)
                    newComputationStatements.push({
                        id: generateId(),
                        idComputation: _computation.id,
                        idStatement: statement.id,
                        operation: _statement.operation
                    })
                })
            })
            await tx.insert(computationStatements).values(newComputationStatements)

            // Accounts
            console.log("Add accounts")
            let newAccounts: (typeof accounts.$inferInsert)[] = defaultAccounts.map((_account) => {
                const statement = newStatements.find((_statement) => _statement.accounts.find(x => x.toString().startsWith(_account.number.toString())))

                return ({
                    id: generateId(),
                    idCompany: newCompany.id,
                    idYear: idCurrentYear,
                    idStatement: statement?.id,
                    number: _account.number,
                    system: _account.system,
                    label: _account.label
                })
            })
            newAccounts = newAccounts.map((_account) => {
                const parent = newAccounts.find((x) => x.number !== _account.number && _account.number.toString().includes(x.number.toString()) && _account.number.toString().length === x.number.toString().length + 1)

                return ({
                    ..._account,
                    idParent: parent?.id
                })
            })
            await tx.insert(accounts).values(newAccounts)


            // AccountSheets
            console.log("Add accountSheets")
            const newAccountSheets: Array<(typeof accountSheets.$inferInsert)> = []
            newSheets.forEach((_sheet) => {
                _sheet.accounts.forEach((_account) => {
                    const account = newAccounts.find((x) => x.number === _account.number)

                    if (!account) throw new Error(`Erreur ${_sheet.number} ${_account.number}`)
                    newAccountSheets.push({
                        id: generateId(),
                        idAccount: account.id,
                        idSheet: _sheet.id,
                        flow: _account.flow,
                        isAllowance: _account.isAllowance
                    })
                })
            })
            await tx.insert(accountSheets).values(newAccountSheets)


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
                email: "dev@emilesabatier.com",
                isEmailValidated: false,
                alias: randFirstName(),
                passwordHash: passwordHash,
                passwordSalt: passwordSalt,
                invitationToken: invitationToken,
                isInvitationValidated: false
            }
            await tx.insert(users).values(adminUser)


            // Transactions
            console.log("Add transactions")
            const newTransactions: (typeof transactions.$inferInsert)[] = defaultTransactions.flatMap((transaction) => {
                const idAccount = newAccounts.find((account) => account.number === transaction.accountNumber)?.id
                if (!idAccount) {
                    console.log("Erreur transaction", transaction)
                    return []
                }
                return ([{
                    id: generateId(),
                    idCompany: newCompany.id,
                    idYear: idCurrentYear,
                    idAccount: idAccount,
                    isConfirmed: true,
                    label: transaction.label,
                    date: transaction.date,
                    debit: transaction.debit.toString(),
                    credit: transaction.credit.toString()
                }])
            })
            await tx.insert(transactions).values(newTransactions)
        })

    } catch (error) {
        console.log(error)
    }
}

console.log("Seeding starting.")
await seed()

process.exit()
