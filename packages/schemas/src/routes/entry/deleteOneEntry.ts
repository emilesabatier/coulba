import * as v from "valibot"
import { entrySchema } from "../../schemas/entry/entry.schema"


// Input
export const deleteOneEntryParams = v.object({
    idEntry: entrySchema.entries.id
})

// Output
export const deleteOneEntryReturn = entrySchema
