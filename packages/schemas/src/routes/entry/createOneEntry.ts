import * as v from "valibot"
import { entrySchema } from "../../schemas/entry/entry.schema"


// Input
export const createOneEntryBody = v.object({
    idAccount: entrySchema.entries.idAccount,
    idJournal: v.optional(entrySchema.entries.idJournal),
    idAttachment: v.optional(entrySchema.entries.idAttachment),
    label: entrySchema.entries.label,
    date: entrySchema.entries.date,
    debit: entrySchema.entries.debit,
    credit: entrySchema.entries.credit,
})


// Output
export const createOneEntryReturn = entrySchema
