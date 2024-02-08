import z from "zod"
import { userInclude } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"
import { yearInclude } from "../../schemas/year/year.include"
import { yearSchema } from "../../schemas/year/year.schema"


// Input
export const readOneYearParams = yearSchema.pick({ id: true })
export type ReadOneYearParams = z.infer<typeof readOneYearParams>


// Output
export const readOneYearReturn = yearSchema.pick(yearInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneYearReturn = z.infer<typeof readOneYearReturn>
