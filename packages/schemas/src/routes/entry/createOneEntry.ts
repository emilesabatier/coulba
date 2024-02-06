import { z } from "zod"
import { entrySchema } from "../../models/entry/entry.schema.js"


// Input
export const createOneEntryBody = z.object({
    idAccount: entrySchema.shape.idAccount,
    idJournal: entrySchema.shape.idJournal.optional(),
    idAttachment: entrySchema.shape.idAttachment.optional(),
    label: entrySchema.shape.label,
    date: entrySchema.shape.date,
    debit: entrySchema.shape.debit,
    credit: entrySchema.shape.credit,
})
export type CreateOneEntryBody = z.infer<typeof createOneEntryBody>


// Output
export const createOneEntryReturn = entrySchema.pick({ id: true })
export type CreateOneEntryReturn = z.infer<typeof createOneEntryReturn>
