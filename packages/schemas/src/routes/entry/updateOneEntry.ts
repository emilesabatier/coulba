import z from "zod"
import { entrySchema } from "../../models/entry/entry.schema"


// Input
export const updateOneEntryParams = entrySchema.pick({ id: true })
export type UpdateOneEntryParams = z.infer<typeof updateOneEntryParams>

export const updateOneEntryBody = z.object({
    idAccount: entrySchema.shape.idAccount,
    idJournal: entrySchema.shape.idJournal,
    idAttachment: entrySchema.shape.idAttachment,
    label: entrySchema.shape.label,
    date: entrySchema.shape.date,
    debit: entrySchema.shape.debit,
    credit: entrySchema.shape.credit,
}).partial()
export type UpdateOneEntryBody = z.infer<typeof updateOneEntryBody>


// Output
export const updateOneEntryReturn = entrySchema.pick({ id: true })
export type UpdateOneEntryReturn = z.infer<typeof updateOneEntryReturn>
