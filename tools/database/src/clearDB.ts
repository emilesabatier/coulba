import { sql } from 'drizzle-orm'
import { drizzle } from "drizzle-orm/postgres-js"
import postgres from "postgres"
import { env } from './env'


const connection = postgres(env()?.DATABASE_URL ?? "", { max: 1 })
const db = drizzle(connection)


async function clearDb() {
    const query = sql<string>`SELECT table_name
      FROM information_schema.tables
      WHERE table_schema = 'public'
        AND table_type = 'BASE TABLE';
    `

    const tables = await db.execute(query)

    for (let table of tables) {
        const query = sql.raw(`DROP TABLE ${table.table_name} CASCADE;`)
        await db.execute(query)
    }

    console.log("Clearing is done.")

    return
}

console.log("Clearing starting.")
await clearDb()

process.exit()
