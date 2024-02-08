import env from '#start/env'
import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import * as schema from "@coulba/schemas/models"


const queryClient = postgres(env.get("DATABASE_URL"))
export const db = drizzle(queryClient, { schema: schema })
