import { records, rows } from "@coulba/schemas/models"
import { v1 } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { V1Env } from "../../middlewares/checkApiKey.js"


export const recordsRoute = new Hono<V1Env>()
    .post(
        '/',
        validator("json", bodyValidator(v1.records.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const createRecord = await db.transaction(async (tx) => {
                const [createRecord] = await tx
                    .insert(records)
                    .values({
                        id: generateId(),
                        idOrganization: c.var.organization.id,
                        idYear: body.idYear,
                        idAttachment: body.idAttachment,
                        idJournal: body.idJournal,
                        label: body.label,
                        date: body.date,
                        isValidated: false
                    })
                    .returning()

                const newRows = body.rows.map((row) => ({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: body.idYear,
                    idRecord: createRecord.id,
                    idAccount: row.idAccount,
                    isValidated: false,
                    isComputed: false,
                    label: row.label,
                    debit: (row.debit ?? 0).toString(),
                    credit: (row.credit ?? 0).toString()
                }))


                const createRows = await tx
                    .insert(rows)
                    .values(newRows)
                    .returning()

                return ({
                    ...createRecord,
                    rows: createRows
                })
            })


            return c.json(createRecord, 200)
        }
    )
