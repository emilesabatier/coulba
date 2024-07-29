import * as v from "valibot"
import { booleanSchema } from "../../../components/schemas/boolean.schema.js"
import { yearSchema } from "../../../schemas/year/year.schema.js"


// Input
export const createYearBody = v.object({
    idPreviousYear: v.nullish(yearSchema.entries.idPreviousYear),
    isMinimalSystem: yearSchema.entries.isMinimalSystem,
    label: yearSchema.entries.label,
    startingOn: yearSchema.entries.startingOn,
    endingOn: yearSchema.entries.endingOn,
    isReplicatingAccounts: v.nullish(booleanSchema)
})


// Output
export const createYearReturn = yearSchema
