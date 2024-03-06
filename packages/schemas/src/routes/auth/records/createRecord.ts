import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema"


// Input
export const createRecordBody = v.object({
    idYear: recordSchema.entries.idYear,
    idAccount: recordSchema.entries.idAccount,
    idJournal: v.optional(recordSchema.entries.idJournal),
    idAttachment: v.optional(recordSchema.entries.idAttachment),
    label: recordSchema.entries.label,
    date: recordSchema.entries.date,
    debit: recordSchema.entries.debit,
    credit: recordSchema.entries.credit,
})


// Output
export const createRecordReturn = recordSchema
