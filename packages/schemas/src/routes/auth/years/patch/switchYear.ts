import * as v from "valibot"
import { yearSchema } from "../../../../schemas/year/year.schema"


// Input
export const switchYearParams = v.object({
    idYear: v.nonNullish(yearSchema.entries.id, "L'exercice doit être sélectionné")
})


// Output
export const switchYearReturn = yearSchema
