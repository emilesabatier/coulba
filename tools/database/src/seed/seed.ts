import { companies, users, years } from '@coulba/schemas/models'
import { generateId } from '@coulba/schemas/services'
import { randFirstName, randFullName } from '@ngneat/falso'
import { pbkdf2Sync, randomBytes } from "crypto"
import { eq } from 'drizzle-orm'
import { drizzle } from "drizzle-orm/postgres-js"
import { customAlphabet } from "nanoid"
import postgres from "postgres"
import { env } from '../env'


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
                idYear: null,
                siren: "123123123",
                name: "MonAssoDemo"
            }
            await tx.insert(companies).values(newCompany)

            // Years
            console.log("Add years")
            const newYears: (typeof years.$inferInsert)[] = [
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    label: "Exercice 2024",
                    startingOn: new Date(2024, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2024, 11, 31, 23, 99, 99).toISOString()
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    label: "Exercice 2023",
                    startingOn: new Date(2023, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2023, 11, 31, 23, 99, 99).toISOString()
                },
                {
                    id: generateId(),
                    idCompany: newCompany.id,
                    label: "Exercice 2022",
                    startingOn: new Date(2022, 0, 1, 0, 0).toISOString(),
                    endingOn: new Date(2022, 11, 31, 23, 99, 99).toISOString()
                }
            ]
            await tx.insert(years).values(newYears)
            await tx.update(companies).set({ idYear: newYears.at(0)?.id }).where(eq(companies.id, newCompany.id))

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
