import * as v from "valibot"
import { yearSchema } from "../../schemas/year/year.schema"


// Input
export const createOneYearBody = v.object({
    label: v.optional(yearSchema.entries.label),
    startingAt: yearSchema.entries.startingAt,
    endingAt: yearSchema.entries.endingAt
})


// Output
export const createOneYearReturn = yearSchema
