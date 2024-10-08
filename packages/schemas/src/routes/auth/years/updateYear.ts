import * as v from "valibot"
import { yearSchema } from "../../../schemas/year/year.schema.js"


// Input
export const updateYearParams = v.object({
    idYear: yearSchema.entries.id
})

export const updateYearBody = v.partial(v.object({
    idPreviousYear: yearSchema.entries.idPreviousYear,
    isSelected: yearSchema.entries.isSelected,
    label: yearSchema.entries.label,
    startingOn: yearSchema.entries.startingOn,
    endingOn: yearSchema.entries.endingOn
}))


// Output
export const updateYearReturn = yearSchema
