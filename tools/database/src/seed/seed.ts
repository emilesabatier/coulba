import { accounts, companies, users, years } from '@coulba/schemas/models'
import { generateId } from '@coulba/schemas/services'
import { randFirstName, randFullName } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { env } from '../env'
import { defaultAccounts } from './accounts'


export function generateTemporaryPassword(): string {
    const generateHex = customAlphabet('1234567890abcdef', 8)

    return generateHex()
}


const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)


async function seed() {
    try {
        await db.transaction(async (tx) => {


            // Company
            console.log("Add company")
            const newCompany: (typeof companies.$inferInsert) = {
                id: generateId(),
                siren: "123123123",
                name: "MaSociétéDémo"
            }
            await tx.insert(companies).values(newCompany)


            // Years
            console.log("Add years")
            const idCurrentYear = generateId()
            const newYears: (typeof years.$inferInsert)[] = [
                {
                    id: idCurrentYear,
                    idCompany: newCompany.id,
                    isCurrent: true,
                    label: "Exercice 2024",
                    startingOn: new Date(2024, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2024, 11, 31, 23, 99, 99).toISOString()
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    isCurrent: false,
                    label: "Exercice 2023",
                    startingOn: new Date(2023, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2023, 11, 31, 23, 99, 99).toISOString()
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    isCurrent: false,
                    label: "Exercice 2022",
                    startingOn: new Date(2022, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2022, 11, 31, 23, 99, 99).toISOString()
                }
            ]
            await tx.insert(years).values(newYears)


            // Account
            console.log("Add accounts")
            const newAccounts: (typeof accounts.$inferInsert)[] = defaultAccounts.map((defaultAccount) => ({
                id: generateId(),
                idCompany: newCompany.id,
                idYear: idCurrentYear,
                number: defaultAccount.number,
                label: defaultAccount.label
            }))
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
                emailAddress: "demo@coulba.com",
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
