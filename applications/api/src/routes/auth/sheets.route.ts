import { sheets } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { sheetInclude } from "@coulba/schemas/schemas"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"


export const sheetsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.sheets.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createSheet] = await db
                .insert(sheets)
                .values({
                    id: generateId(),
                    idCompany: c.var.company.id,
                    idYear: c.var.currentYear.id,
                    idParent: body.idParent,
                    side: body.side,
                    label: body.label,
                    number: body.number,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()


            return c.json(createSheet, 200)
        }
    )
    .get(
        "/:idSheet?",
        validator("param", paramsValidator(auth.sheets.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idSheet) {
                const readSheets = await db.query.sheets.findMany({
                    where: and(
                        eq(sheets.idCompany, c.var.user.idCompany),
                        eq(sheets.idYear, c.var.currentYear.id)
                    ),
                    columns: sheetInclude,
                    with: {
                        accountSheets: true
                    }
                })

                return c.json(readSheets, 200)
            }

            const readSheet = await db.query.sheets.findFirst({
                where: and(
                    eq(sheets.id, params.idSheet),
                    eq(sheets.idCompany, c.var.user.idCompany)
                ),
                columns: sheetInclude,
                with: {
                    accountSheets: true
                }
            })

            return c.json(readSheet, 200)
        }
    )
    .put(
        '/:idSheet',
        validator("param", paramsValidator(auth.sheets.put.params)),
        validator("json", bodyValidator(auth.sheets.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateSheet] = await db
                .update(sheets)
                .set({
                    idParent: body.idParent,
                    side: body.side,
                    label: body.label,
                    number: body.number,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(eq(sheets.id, params.idSheet))
                .returning()

            return c.json(updateSheet, 200)
        }
    )
    .delete(
        '/:idSheet',
        validator("param", paramsValidator(auth.sheets.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteSheet] = await db
                .delete(sheets)
                .where(eq(sheets.id, params.idSheet))
                .returning()

            return c.json(deleteSheet, 200)
        }
    )
