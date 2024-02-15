import { entries } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"


export const entriesRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.entries.create.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createEntry] = await db
                .insert(entries)
                .values({
                    id: generateId(),
                    idCompany: c.var.user.idCompany,
                    idYear: body.idYear,
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    state: "draft",
                    label: body.label,
                    date: body.date,
                    debit: body.debit.toString(),
                    credit: body.credit.toString()
                })
                .returning()

            return c.json(createEntry, 200)
        }
    )
    .get(
        "/:idEntry",
        validator("param", paramsValidator(auth.entries.read.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idEntry) {
                const readEntries = await db
                    .select()
                    .from(entries)
                    .where(eq(entries.idCompany, c.var.user.idCompany))

                if (readEntries.length < 1) throw new HTTPException(404, { message: "Entrées non trouvées" })
                return c.json(readEntries, 200)
            }

            const [readEntry] = await db
                .select()
                .from(entries)
                .where(eq(entries.id, params.idEntry))

            if (!readEntry) throw new HTTPException(404, { message: "Entrée non trouvée" })
            return c.json(readEntry, 200)
        }
    )
    .put(
        '/:idEntry',
        validator("param", paramsValidator(auth.entries.update.params)),
        validator("json", bodyValidator(auth.entries.update.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateEntry] = await db
                .update(entries)
                .set({
                    idYear: body.idYear,
                    idAccount: body.idAccount,
                    idJournal: body.idJournal,
                    idAttachment: body.idAttachment,
                    state: body.state,
                    label: body.label,
                    date: body.date,
                    debit: body.debit?.toString(),
                    credit: body.credit?.toString()
                })
                .where(eq(entries.id, params.idEntry))
                .returning()

            return c.json(updateEntry, 200)
        }
    )
    .delete(
        '/:idEntry',
        validator("param", paramsValidator(auth.entries.update.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteEntry] = await db
                .delete(entries)
                .where(eq(entries.id, params.idEntry))
                .returning()

            return c.json(deleteEntry, 200)
        }
    )
