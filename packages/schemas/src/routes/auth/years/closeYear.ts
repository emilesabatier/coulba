import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema.js"


// Input
export const closeYearParams = v.object({
    idYear: yearSchema.entries.id
})


// Output
export const closeYearReturn = yearSchema
