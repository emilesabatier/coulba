import z from "zod"
import { userInclude } from "../../models/user/user.include.js"
import { userSchema } from "../../models/user/user.schema.js"
import { yearInclude } from "../../models/year/year.include.js"
import { yearSchema } from "../../models/year/year.schema.js"


// Input
export const readOneYearParams = yearSchema.pick({ id: true })
export type ReadOneYearParams = z.infer<typeof readOneYearParams>


// Output
export const readOneYearReturn = yearSchema.pick(yearInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneYearReturn = z.infer<typeof readOneYearReturn>
