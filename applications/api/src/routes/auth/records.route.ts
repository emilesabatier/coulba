import { records } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const recordsRoute = new Hono<AuthEnv>()
    .get(
        "/:idRecord?",
        validator("param", paramsValidator(auth.records.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idRecord) {
                const readRecords = await db
                    .select()
                    .from(records)
                    .where(eq(records.idCompany, c.var.user.idCompany))

                return c.json(readRecords, 200)
            }

            const [readRecord] = await db
                .select()
                .from(records)
                .where(eq(records.id, params.idRecord))

            return c.json(readRecord, 200)
        }
    )
