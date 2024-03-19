import { accounts, companies, journals, users, years } from '@coulba/schemas/models'
import { generateId } from '@coulba/schemas/services'
import { randFirstName, randFullName } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { env } from '../env'
import { DefaultAccount, defaultAccounts } from './accounts'


export function generateTemporaryPassword(): string {
    const generateHex = customAlphabet('1234567890abcdef', 8)

    return generateHex()
}


const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)

function flatAccounts(_accounts: DefaultAccount[], idCompany: string, idYear: string, idAccountParent?: string) {
    const flatArray = _accounts.flatMap((_account) => {
        const id = generateId()
        return ([
            {
                id: id,
                idCompany: idCompany,
                idYear: idYear,
                idAccountParent: idAccountParent,
                number: _account.number,
                label: _account.label
            },
            ...flatAccounts(_account.accounts, idCompany, idYear, id)
        ])
    }) as (typeof accounts.$inferInsert)[]
    return flatArray as (typeof accounts.$inferInsert)[]
}

async function seed() {
    try {
        await db.transaction(async (tx) => {


            // Company
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


            // Account
            console.log("Add accounts")
            const newAccounts: (typeof accounts.$inferInsert)[] = flatAccounts(defaultAccounts, newCompany.id, idCurrentYear)
            await tx.insert(accounts).values(newAccounts)


            // User
            console.log("Add user")
            const passwordSalt = randomBytes(16).toString('hex')
            const invitationToken = "c5524D0e"
            const passwordHash = pbkdf2Sync(invitationToken, passwordSalt, 128000, 64, `sha512`).toString(`hex`)
            const adminUser: (typeof users.$inferInsert) = {
                id: generateId(),
                idCompany: newCompany.id,
                isAdmin: true,
                email: "demo@coulba.com",
                forename: randFirstName(),
                surname: randFullName(),
                passwordHash: passwordHash,
                passwordSalt: passwordSalt,
                invitationToken: invitationToken
            }
            await tx.insert(users).values(adminUser)

        })

    } catch (error) {
        console.log(error)
    }
}

console.log("Seeding starting.")
await seed()

process.exit()
