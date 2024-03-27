import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema"


// Input
export const readRecordParams = v.object({
    idRecord: v.optional(recordSchema.entries.id)
})

// Output
export const readRecordReturn = recordSchema
