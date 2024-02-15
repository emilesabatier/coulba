import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema"


// Input
export const createOneYearBody = v.object({
    label: v.optional(yearSchema.entries.label),
    startingOn: yearSchema.entries.startingOn,
    endingOn: yearSchema.entries.endingOn
})


// Output
export const createOneYearReturn = yearSchema
