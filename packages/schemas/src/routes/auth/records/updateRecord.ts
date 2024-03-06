import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema"


// Input
export const updateRecordParams = v.object({
    idRecord: recordSchema.entries.id
})

export const updateRecordBody = v.partial(v.object({
    idYear: recordSchema.entries.idYear,
    idAccount: recordSchema.entries.idAccount,
    idJournal: recordSchema.entries.idJournal,
    idAttachment: recordSchema.entries.idAttachment,
    isConfirmed: recordSchema.entries.isConfirmed,
    label: recordSchema.entries.label,
    date: recordSchema.entries.date,
    debit: recordSchema.entries.debit,
    credit: recordSchema.entries.credit,
}))


// Output
export const updateRecordReturn = recordSchema
