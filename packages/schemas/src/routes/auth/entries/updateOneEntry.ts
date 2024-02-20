import * as v from "valibot"
import { entrySchema } from "../../../schemas/entry/entry.schema"


// Input
export const updateOneEntryParams = v.object({
    idEntry: entrySchema.entries.id
})

export const updateOneEntryBody = v.partial(v.object({
    idYear: entrySchema.entries.idYear,
    idAccount: entrySchema.entries.idAccount,
    idJournal: entrySchema.entries.idJournal,
    idAttachment: entrySchema.entries.idAttachment,
    isConfirmed: entrySchema.entries.isConfirmed,
    label: entrySchema.entries.label,
    date: entrySchema.entries.date,
    debit: entrySchema.entries.debit,
    credit: entrySchema.entries.credit,
}))


// Output
export const updateOneEntryReturn = entrySchema
