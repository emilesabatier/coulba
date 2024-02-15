import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema"


// Input
export const deleteOneYearParams = v.object({
    idYear: yearSchema.entries.id
})


// Output
export const deleteOneYearReturn = yearSchema
