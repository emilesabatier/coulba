import { journals } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const journalsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.journals.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createJournal] = await db
                .insert(journals)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    code: body.code,
                    label: body.label,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createJournal, 200)
        }
    )
    .get(
        "/:idJournal?",
        validator("param", paramsValidator(auth.journals.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idJournal) {
                const readJournals = await db
                    .select()
                    .from(journals)
                    .where(eq(journals.idOrganization, c.var.user.idOrganization))

                return c.json(readJournals, 200)
            }

            const [readJournal] = await db
                .select()
                .from(journals)
                .where(and(
                    eq(journals.idOrganization, c.var.user.idOrganization),
                    eq(journals.id, params.idJournal)
                ))

            return c.json(readJournal, 200)
        }
    )
    .put(
        '/:idJournal',
        validator("param", paramsValidator(auth.journals.put.params)),
        validator("json", bodyValidator(auth.journals.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateJournal] = await db
                .update(journals)
                .set({
                    code: body.code,
                    label: body.label,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(journals.idOrganization, c.var.user.idOrganization),
                    eq(journals.id, params.idJournal)
                ))
                .returning()

            return c.json(updateJournal, 200)
        }
    )
    .delete(
        '/:idJournal',
        validator("param", paramsValidator(auth.journals.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteJournal] = await db
                .delete(journals)
                .where(and(
                    eq(journals.idOrganization, c.var.user.idOrganization),
                    eq(journals.id, params.idJournal)
                ))
                .returning()

            return c.json(deleteJournal, 200)
        }
    )