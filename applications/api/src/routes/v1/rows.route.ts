import { accounts, journals, rows } from "@coulba/schemas/models"
import { v1 } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { V1Env } from "../../middlewares/checkApiKey.js"


export const rowsRoute = new Hono<V1Env>()
    .post(
        '/',
        validator("json", bodyValidator(v1.rows.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [readAccount] = await db
                .select()
                .from(accounts)
                .where(and(
                    eq(accounts.idOrganization, c.var.organization.id),
                    eq(accounts.idYear, c.var.currentYear.id),
                    eq(accounts.number, body.accountNumber)
                ))
            if (!readAccount) throw new HTTPException(401, { message: "Le compte associé au numéro renseigné n'existe pas" })

            let idJournal = undefined
            if (body.journalcode) {
                const [readJournal] = await db
                    .select()
                    .from(journals)
                    .where(and(
                        eq(journals.idOrganization, c.var.organization.id),
                        eq(journals.code, body.journalcode)
                    ))
                if (!readJournal) throw new HTTPException(401, { message: "Le journal associé à l'codee renseigné n'existe pas" })
                idJournal = readJournal.id
            }

            const [createRow] = await db
                .insert(rows)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idRecord: "",
                    idAccount: readAccount.id,
                    isValidated: false,
                    label: body.label,
                    debit: (body.debit ?? 0).toString(),
                    credit: (body.credit ?? 0).toString()
                })
                .returning()

            return c.json(createRow, 200)
        }
    )
