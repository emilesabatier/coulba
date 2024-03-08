import { accounts } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const accountsRoute = new Hono<AuthEnv>()
    .get(
        "/:idAccount?",
        validator("param", paramsValidator(auth.accounts.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idAccount) {
                const readAccounts = await db
                    .select()
                    .from(accounts)
                    .where(eq(accounts.idCompany, c.var.user.idCompany))

                return c.json(readAccounts, 200)
            }

            const [readAccount] = await db
                .select()
                .from(accounts)
                .where(and(
                    eq(accounts.idCompany, c.var.user.idCompany),
                    eq(accounts.id, params.idAccount)
                ))

            if (!readAccount) throw new HTTPException(404, { message: "Compte non trouvé" })
            return c.json(readAccount, 200)
        }
    )
