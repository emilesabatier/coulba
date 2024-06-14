import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema.js"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const createRecordBody = v.object({
    idYear: recordSchema.entries.idYear,
    idAttachment: v.optional(recordSchema.entries.idAttachment),
    idJournal: v.optional(recordSchema.entries.idJournal),
    label: recordSchema.entries.label,
    date: recordSchema.entries.date,
    rows: v.array(v.object({
        idAccount: rowSchema.entries.idAccount,
        label: rowSchema.entries.label,
        debit: v.optional(rowSchema.entries.debit),
        credit: v.optional(rowSchema.entries.credit)
    }))

})


// Output
export const createRecordReturn = v.merge([
    recordSchema,
    v.object({
        rows: v.array(rowSchema)
    })
])
