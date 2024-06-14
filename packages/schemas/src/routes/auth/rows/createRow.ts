import * as v from "valibot"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const CreateRowBody = v.object({
    idRecord: rowSchema.entries.idRecord,
    idAccount: rowSchema.entries.idAccount,
    label: rowSchema.entries.label,
    debit: v.optional(rowSchema.entries.debit),
    credit: v.optional(rowSchema.entries.credit),
})


// Output
export const CreateRowReturn = rowSchema
