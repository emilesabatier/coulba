import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"
import { journalSchema } from "../../../schemas/journal/journal.schema.js"
import { recordSchema } from "../../../schemas/record/record.schema.js"


// Input
export const createRecordBody = v.object({
    accountNumber: accountSchema.entries.number,
    journalAcronym: v.optional(journalSchema.entries.acronym),
    idAttachment: v.optional(recordSchema.entries.idAttachment),
    label: recordSchema.entries.label,
    date: recordSchema.entries.date,
    debit: v.optional(recordSchema.entries.debit),
    credit: v.optional(recordSchema.entries.credit)
})


// Output
export const createRecordReturn = recordSchema
