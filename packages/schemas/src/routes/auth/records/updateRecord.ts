import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema"


// Input
export const updateRecordParams = v.object({
    idRecord: recordSchema.entries.id
})

export const updateRecordBody = v.partial(v.object({
    idJournal: recordSchema.entries.idJournal,
    idAttachment: recordSchema.entries.idAttachment,
    label: recordSchema.entries.label,
    date: recordSchema.entries.date
}))


// Output
export const updateRecordReturn = recordSchema
