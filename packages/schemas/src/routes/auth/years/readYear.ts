import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema"


// Input
export const readYearParams = v.object({
    idYear: v.optional(yearSchema.entries.id)
})

// Output
export const readYearReturn = yearSchema
