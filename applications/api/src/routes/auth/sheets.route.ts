import { sheets } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { sheetInclude } from "@coulba/schemas/schemas"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { HTTPException } from "hono/http-exception"
import { validator } from 'hono/validator'
import { db } from "../../clients/db"
import { bodyValidator } from "../../middlewares/bodyValidator"
import { AuthEnv } from "../../middlewares/checkAuth"
import { paramsValidator } from "../../middlewares/paramsValidator"
import { accountSheetsRoute } from "./accountSheets.route"


export const sheetsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.sheets.post.body)),
        async (c) => {
            if (!c.var.currentYear) throw new HTTPException(400)

            const body = c.req.valid('json')

            const [createSheet] = await db
                .insert(sheets)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
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
                if (!c.var.currentYear) return c.json([], 200)

                const readSheets = await db.query.sheets.findMany({
                    where: and(
                        eq(sheets.idOrganization, c.var.user.idOrganization),
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
                    eq(sheets.idOrganization, c.var.user.idOrganization),
                    eq(sheets.id, params.idSheet)
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
                .where(and(
                    eq(sheets.idOrganization, c.var.user.idOrganization),
                    eq(sheets.id, params.idSheet)
                ))
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
                .where(and(
                    eq(sheets.idOrganization, c.var.user.idOrganization),
                    eq(sheets.id, params.idSheet)
                ))
                .returning()

            return c.json(deleteSheet, 200)
        }
    )
    .route('/account-sheets', accountSheetsRoute)

