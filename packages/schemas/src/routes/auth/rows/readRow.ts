import * as v from "valibot"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const readRowParams = v.object({
    idRow: v.optional(rowSchema.entries.id)
})

// Output
export const readRowReturn = rowSchema
