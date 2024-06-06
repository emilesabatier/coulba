import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema.js"


// Input
export const createYearBody = v.object({
    idPreviousYear: v.nullish(yearSchema.entries.idPreviousYear),
    label: yearSchema.entries.label,
    startingOn: yearSchema.entries.startingOn,
    endingOn: yearSchema.entries.endingOn,
    system: yearSchema.entries.system
})


// Output
export const createYearReturn = yearSchema
