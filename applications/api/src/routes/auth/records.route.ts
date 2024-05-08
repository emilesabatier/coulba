import { records } from "@coulba/schemas/models"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { db } from "../../clients/db.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"


export const recordsRoute = new Hono<AuthEnv>()
    .get(
        "/",
        async (c) => {

            const readRecords = await db
                .select()
                .from(records)
                .where(eq(records.idCompany, c.var.user.idCompany))

            return c.json(readRecords, 200)
        }
    )
