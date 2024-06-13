import { accounts, computations, rows, statements } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { launch } from "puppeteer"
import { statementInclude } from "../../../../../packages/schemas/build/schemas/statement/statement.include.js"
import { db } from "../../clients/db.js"
import { bodyValidator } from "../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../middlewares/checkAuth.js"
import { paramsValidator } from "../../middlewares/paramsValidator.js"
import { getBalance } from "../../services/email/templates/sheet/getBalance.js"
import { groupStatements } from "../../services/email/templates/statement/groupStatements.js"
import { statementTemplate } from "../../services/email/templates/statement/statement.js"


export const statementsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.statements.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            const [createStatement] = await db
                .insert(statements)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idYear: c.var.currentYear.id,
                    idParent: body.idParent,
                    number: body.number,
                    label: body.label,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            return c.json(createStatement, 200)
        }
    )
    .get(
        "/:idStatement?",
        validator("param", paramsValidator(auth.statements.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idStatement) {
                const readStatements = await db.query.statements.findMany({
                    where: and(
                        eq(statements.idOrganization, c.var.user.idOrganization),
                        eq(statements.idYear, c.var.currentYear.id)
                    ),
                    columns: statementInclude,
                    with: {
                        accountStatements: true
                    }
                })

                return c.json(readStatements, 200)
            }

            const readStatement = await db.query.statements.findFirst({
                where: and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.id, params.idStatement)
                ),
                columns: statementInclude,
                with: {
                    accountStatements: true
                }
            })

            return c.json(readStatement, 200)
        }
    )
    .put(
        '/:idStatement',
        validator("param", paramsValidator(auth.statements.put.params)),
        validator("json", bodyValidator(auth.statements.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateStatement] = await db
                .update(statements)
                .set({
                    idParent: body.idParent,
                    label: body.label,
                    number: body.number,
                    lastUpdatedOn: new Date().toISOString(),
                    lastUpdatedBy: c.var.user.id
                })
                .where(and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.id, params.idStatement)
                ))
                .returning()

            return c.json(updateStatement, 200)
        }
    )
    .delete(
        '/:idStatement',
        validator("param", paramsValidator(auth.statements.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteStatement] = await db
                .delete(statements)
                .where(and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.id, params.idStatement)
                ))
                .returning()

            return c.json(deleteStatement, 200)
        }
    )
    .patch(
        '/download',
        async (c) => {
            const readStatements = await db.query.statements.findMany({
                where: and(
                    eq(statements.idOrganization, c.var.user.idOrganization),
                    eq(statements.idYear, c.var.currentYear.id)
                ),
                with: {
                    accountStatements: true
                }
            })
            const readRows = await db.query.rows.findMany({
                where: and(
                    eq(rows.idOrganization, c.var.user.idOrganization),
                    eq(rows.idYear, c.var.currentYear.id),
                    eq(rows.isValidated, true),
                    eq(rows.isComputed, true)
                )
            })
            const readAccounts = await db.query.accounts.findMany({
                where: and(
                    eq(accounts.idOrganization, c.var.user.idOrganization),
                    eq(accounts.idYear, c.var.currentYear.id)
                )
            })
            const readComputations = await db.query.computations.findMany({
                where: and(
                    eq(computations.idOrganization, c.var.user.idOrganization),
                    eq(computations.idYear, c.var.currentYear.id)
                ),
                with: {
                    computationStatements: true
                }
            })

            const balance = getBalance(readRows, readAccounts)
            const sortedStatements = groupStatements(readStatements, balance, null)
                .sort((a, b) => a.number - b.number)
            const sortedComputations = (readComputations)
                .sort((a, b) => a.number - b.number)


            const browser = await launch({
                headless: true,
                defaultViewport: {
                    width: 2480,
                    height: 3508,
                    deviceScaleFactor: 1
                }
            })
            const page = await browser.newPage()

            const htmlResponse = await c.html(statementTemplate({
                statements: sortedStatements,
                computations: sortedComputations
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