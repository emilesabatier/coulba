import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema.js"


// Input
export const updateRecordParams = v.object({
    idRecord: recordSchema.entries.id
})

export const updateRecordBody = v.partial(v.object({
    idAccount: recordSchema.entries.idAccount,
    idJournal: recordSchema.entries.idJournal,
    idAttachment: recordSchema.entries.idAttachment,
    label: recordSchema.entries.label,
    date: recordSchema.entries.date,
    debit: recordSchema.entries.debit,
    credit: recordSchema.entries.credit,
}))


// Output
export const updateRecordReturn = recordSchema
