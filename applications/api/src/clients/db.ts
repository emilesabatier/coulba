import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from "@coulba/schemas/models"
import { env } from '../env'


const databaseUrl = env()?.DATABASE_URL
if (!databaseUrl) throw new Error("No database URL given.")


const queryClient = postgres(databaseUrl)
export const db = drizzle(queryClient, { schema: schema })
