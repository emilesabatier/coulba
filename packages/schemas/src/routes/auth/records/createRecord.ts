import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema.js"


// Input
export const createRecordBody = v.object({
    idJournal: v.optional(recordSchema.entries.idJournal),
    idAttachment: v.optional(recordSchema.entries.idAttachment),
    label: recordSchema.entries.label,
    date: recordSchema.entries.date
})


// Output
export const createRecordReturn = recordSchema
