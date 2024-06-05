import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"
import { journalSchema } from "../../../schemas/journal/journal.schema.js"
import { rowSchema } from "../../../schemas/row/row.schema.js"


// Input
export const CreateRowBody = v.object({
    accountNumber: accountSchema.entries.number,
    journalcode: v.optional(journalSchema.entries.code),
    label: rowSchema.entries.label,
    debit: v.optional(rowSchema.entries.debit),
    credit: v.optional(rowSchema.entries.credit)
})


// Output
export const CreateRowReturn = rowSchema
