import * as v from "valibot"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const UpdateRowParams = v.object({
    idRow: rowSchema.entries.id
})

export const UpdateRowBody = v.partial(v.object({
    idAccount: rowSchema.entries.idAccount,
    label: rowSchema.entries.label,
    debit: rowSchema.entries.debit,
    credit: rowSchema.entries.credit,
}))


// Output
export const UpdateRowReturn = rowSchema
