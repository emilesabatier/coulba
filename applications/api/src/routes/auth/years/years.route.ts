import { years } from "@coulba/schemas/models"
import { auth } from "@coulba/schemas/routes"
import { generateId } from "@coulba/schemas/services"
import { and, eq } from "drizzle-orm"
import { Hono } from 'hono'
import { validator } from 'hono/validator'
import { db } from "../../../clients/db.js"
import { bodyValidator } from "../../../middlewares/bodyValidator.js"
import { AuthEnv } from "../../../middlewares/checkAuth.js"
import { paramsValidator } from "../../../middlewares/paramsValidator.js"
import { generateDefaultYearData } from "./generateDefaultYearData.js"
import { generateLastYearData } from "./generateLastYearData.js"
import { yearPatchRoutes } from "./patch.route.js"


export const yearsRoute = new Hono<AuthEnv>()
    .post(
        '/',
        validator("json", bodyValidator(auth.years.post.body)),
        async (c) => {
            const body = c.req.valid('json')

            // Generate data

            const [createYear] = await db
                .insert(years)
                .values({
                    id: generateId(),
                    idOrganization: c.var.organization.id,
                    idPreviousYear: body.idPreviousYear,
                    isMinimalSystem: body.isMinimalSystem,
                    isSelected: false,
                    isClosed: false,
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn,
                    lastUpdatedBy: c.var.user.id,
                    createdBy: c.var.user.id
                })
                .returning()

            if (!body.isReplicatingAccounts) {
                await generateDefaultYearData({
                    organization: c.var.organization,
                    year: createYear
                })
            } else {
                await generateLastYearData({
                    organization: c.var.organization,
                    year: createYear
                })
            }

            return c.json(createYear, 200)
        }
    )
    .get(
        "/:idYear?",
        validator("param", paramsValidator(auth.years.get.params)),
        async (c) => {
            const params = c.req.valid('param')

            if (!params.idYear) {
                const readYears = await db
                    .select()
                    .from(years)
                    .where(eq(years.idOrganization, c.var.user.idOrganization))

                return c.json(readYears, 200)
            }

            const [readYear] = await db
                .select()
                .from(years)
                .where(and(
                    eq(years.idOrganization, c.var.user.idOrganization),
                    eq(years.id, params.idYear)
                ))

            return c.json(readYear, 200)
        }
    )
    .put(
        '/:idYear',
        validator("param", paramsValidator(auth.years.put.params)),
        validator("json", bodyValidator(auth.years.put.body)),
        async (c) => {
            const params = c.req.valid('param')
            const body = c.req.valid('json')

            const [updateYear] = await db
                .update(years)
                .set({
                    idPreviousYear: body.idPreviousYear,
                    isSelected: body.isSelected,
                    label: body.label,
                    startingOn: body.startingOn,
                    endingOn: body.endingOn,
                    lastUpdatedBy: c.var.user.id,
                    lastUpdatedOn: new Date().toISOString()
                })
                .where(and(
                    eq(years.idOrganization, c.var.user.idOrganization),
                    eq(years.id, params.idYear)
                ))
                .returning()

            return c.json(updateYear, 200)
        }
    )
    .delete(
        '/:idYear',
        validator("param", paramsValidator(auth.years.put.params)),
        async (c) => {
            const params = c.req.valid('param')

            const [deleteYear] = await db
                .delete(years)
                .where(and(
                    eq(years.idOrganization, c.var.user.idOrganization),
                    eq(years.id, params.idYear),
                    eq(years.isSelected, false)
                ))
                .returning()

            return c.json(deleteYear, 200)
        }
    )
    .route('', yearPatchRoutes)
