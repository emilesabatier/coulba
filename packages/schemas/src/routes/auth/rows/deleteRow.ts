import * as v from "valibot"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const deleteRowParams = v.object({
    idRow: rowSchema.entries.id
})

// Output
export const deleteRowReturn = rowSchema
