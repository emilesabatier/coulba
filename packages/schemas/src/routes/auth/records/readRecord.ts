import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema.js"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const readRecordParams = v.object({
    idRecord: v.optional(recordSchema.entries.id)
})

// Output
export const readRecordReturn = v.merge([
    recordSchema,
    v.object({
        rows: v.array(rowSchema)
    })
])
