import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema"


// Input
export const deleteRecordParams = v.object({
    idRecord: recordSchema.entries.id
})

// Output
export const deleteRecordReturn = recordSchema
