import { records, rows } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { checkCurrentYear } from "../../middlewares/checkCurrentYear.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const rowsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        checkCurrentYear,
        validator("json", bodyValidator(auth.rows.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [readRecord] = await db
                .select()
                .from(records)
                .where(and(
                    eq(records.id, body.idRecord),
                    eq(records.isValidated, false)
                ))
            if (!readRecord) throw new HTTPException(403, { message: "L'écriture est validée" })

            const [createRow] = await db
                .insert(rows)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idRecord: body.idRecord,
                    idAccount: body.idAccount,
                    isValidated: false,
                    isComputed: false,
                    label: body.label,
                    debit: (body.debit ?? 0).toString(),
                    credit: (body.credit ?? 0).toString(),
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createRow, 200)
        }
    )
    .get(
        "/:idRow?",
        validator("param", paramsValidator(auth.rows.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idRow) {
                const readRows = await db
                    .select()
                    .from(rows)
                    .where(and(
                        eq(rows.idOrganization, c.var.user.idOrganization),
                        eq(rows.idYear, c.var.currentYear.id)
                    ))

                return c.json(readRows, 200)
            }

            const [readRow] = await db
                .select()
                .from(rows)
                .where(and(
                    eq(rows.idOrganization, c.var.user.idOrganization),
                    eq(rows.id, params.idRow)
                ))

            return c.json(readRow, 200)
        }
    )
    .put(
        '/:idRow',
        checkCurrentYear,
        validator("param", paramsValidator(auth.rows.put.params)),
        validator("json", bodyValidator(auth.rows.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [udpateRow] = await db
                .update(rows)
                .set({
                    idAccount: body.idAccount,
                    label: body.label,
                    debit: body.debit?.toString(),
                    credit: body.credit?.toString(),
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(rows.idOrganization, c.var.user.idOrganization),
                    eq(rows.id, params.idRow),
                    eq(rows.isValidated, false)
                ))
                .returning()

            return c.json(udpateRow, 200)
        }
    )
    .delete(
        '/:idRow',
        checkCurrentYear,
        validator("param", paramsValidator(auth.rows.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteRow] = await db
                .delete(rows)
                .where(and(
                    eq(rows.idOrganization, c.var.user.idOrganization),
                    eq(rows.id, params.idRow),
                    eq(rows.isValidated, false)
                ))
                .returning()

            return c.json(deleteRow, 200)
        }
    )
