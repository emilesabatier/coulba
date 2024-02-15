import { journals } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"
import { HTTPException } from "hono/http-exception"


export const journalsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.journals.create.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createJournal] = await db
                .insert(journals)
                .values({
                    id: generateId(),
                    idCompany: c.var.user.idCompany,
                    acronym: body.acronym,
                    label: body.label
                })
                .returning()

            return c.json(createJournal, 200)
        }
    )
    .get(
        "/:idJournal",
        validator("param", paramsValidator(auth.journals.read.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idJournal) {
                const readJournals = await db
                    .select()
                    .from(journals)
                    .where(eq(journals.idCompany, c.var.user.idCompany))

                if (readJournals.length < 1) throw new HTTPException(404, { message: "Journaux non trouvés" })
                return c.json(readJournals, 200)
            }

            const [readJournal] = await db
                .select()
                .from(journals)
                .where(eq(journals.id, params.idJournal))

            if (!readJournal) throw new HTTPException(404, { message: "Journal non trouvé" })
            return c.json(readJournal, 200)
        }
    )
    .put(
        '/:idJournal',
        validator("param", paramsValidator(auth.journals.update.params)),
        validator("json", bodyValidator(auth.journals.update.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateJournal] = await db
                .update(journals)
                .set({
                    acronym: body.acronym,
                    label: body.label
                })
                .where(eq(journals.id, params.idJournal))
                .returning()

            return c.json(updateJournal, 200)
        }
    )
    .delete(
        '/:idJournal',
        validator("param", paramsValidator(auth.journals.update.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteJournal] = await db
                .delete(journals)
                .where(eq(journals.id, params.idJournal))
                .returning()

            return c.json(deleteJournal, 200)
        }
    )
