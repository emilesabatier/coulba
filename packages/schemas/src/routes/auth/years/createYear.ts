import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema.js"


// Input
export const createYearBody = v.object({
    idPreviousYear: v.nullish(yearSchema.entries.idPreviousYear),
    isMinimalSystem: yearSchema.entries.isMinimalSystem,
    label: yearSchema.entries.label,
    startingOn: yearSchema.entries.startingOn,
    endingOn: yearSchema.entries.endingOn
})


// Output
export const createYearReturn = yearSchema
