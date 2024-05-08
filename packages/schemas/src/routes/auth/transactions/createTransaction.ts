import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema.js"


// Input
export const createTransactionBody = v.object({
    idAccount: transactionSchema.entries.idAccount,
    idJournal: v.optional(transactionSchema.entries.idJournal),
    idAttachment: v.optional(transactionSchema.entries.idAttachment),
    label: transactionSchema.entries.label,
    date: transactionSchema.entries.date,
    debit: v.optional(transactionSchema.entries.debit),
    credit: v.optional(transactionSchema.entries.credit),
})


// Output
export const createTransactionReturn = transactionSchema
