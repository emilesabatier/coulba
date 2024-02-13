import * as v from "valibot"
import { yearSchema } from "../../schemas/year/year.schema"


// Input
export const updateOneYearParams = v.object({
    idYear: yearSchema.entries.id
})

export const updateOneYearBody = v.partial(v.object({
    label: yearSchema.entries.label,
    startingAt: yearSchema.entries.startingAt,
    endingAt: yearSchema.entries.endingAt
}))


// Output
export const updateOneYearReturn = yearSchema
