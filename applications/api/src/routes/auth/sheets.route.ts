import { accounts, records, sheets } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { sheetInclude } from "@coulba/schemas/schemas"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { launch } from "puppeteer"
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"
import { getBalance } from "../../services/email/templates/sheet/getBalance.js"
import { groupSheetsAssets, groupSheetsLiabilities } from "../../services/email/templates/sheet/groupSheets.js"
import { sheetTemplate } from "../../services/email/templates/sheet/sheet.js"


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
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idParent: body.idParent,
                    isDefault: false,
                    side: body.side,
                    number: body.number,
                    label: body.label,
                    addedGrossAmount: body.addedGrossAmount.toString(),
                    addedAllowanceAmount: body.addedAllowanceAmount.toString(),
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
                    addedGrossAmount: body.addedGrossAmount?.toString(),
                    addedAllowanceAmount: body.addedAllowanceAmount?.toString(),
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
    .patch(
        '/download',
        async (c) => {
            const readSheets = await db.query.sheets.findMany({
                where: and(
                    eq(sheets.idOrganization, c.var.user.idOrganization),
                    eq(sheets.idYear, c.var.currentYear.id)
                ),
                with: {
                    accountSheets: true
                }
            })
            const readRows = (await db.query.records.findMany({
                where: and(
                    eq(records.idOrganization, c.var.user.idOrganization),
                    eq(records.idYear, c.var.currentYear.id),
                    eq(records.isComputed, true)
                ),
                with: {
                    rows: true
                }
            }))
                .flatMap((record) => record.rows)

            const readAccounts = await db.query.accounts.findMany({
                where: and(
                    eq(accounts.idOrganization, c.var.user.idOrganization),
                    eq(accounts.idYear, c.var.currentYear.id)
                )
            })

            const balance = getBalance(readRows, readAccounts)
            const sheetAssets = groupSheetsAssets(readSheets.filter((sheet) => sheet.side === "asset"), balance, null)
                .sort((a, b) => a.number - b.number)
            const sheetLiabilities = groupSheetsLiabilities(readSheets.filter((sheet) => sheet.side === "liability"), balance, null)
                .sort((a, b) => a.label.localeCompare(b.label))


            const browser = await launch({
                executablePath: '/usr/bin/chromium-browser',
                args: [
                    '--no-sandbox',
                    '--disable-gpu',
                    '--disable-dev-shm-usage'
                ],
                headless: true,
                defaultViewport: {
                    width: 2480,
                    height: 3508,
                    deviceScaleFactor: 1
                }
            })
            const page = await browser.newPage()

            const htmlResponse = await c.html(sheetTemplate({
                sheetAssets: sheetAssets,
                sheetLiabilities: sheetLiabilities
            }))
            const htmlString = await htmlResponse.text()
            await page.setContent(htmlString)

            await page.addStyleTag({
                content: `
                    @page {
                        margin: 32px;
                    }
                    * {
                        box-sizing: border-box;
                    }
                    body {
                        margin: 0;
                    }
                `
            })
            const height = await page.evaluate(() => {
                const body = document.body
                const html = document.documentElement
                return Math.max(body.scrollHeight, html.scrollHeight)
            })
            const pdf = await page.pdf({
                height: `${height}px`,
                landscape: false,
                printBackground: true,
                preferCSSPageSize: true,
                margin: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }
            })

            await browser.close()

            c.header('Content-Type', 'application/pdf')
            c.status(200)
            return c.body(pdf)

        }
    )

