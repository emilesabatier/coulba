import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"
import { journalSchema } from "../../../schemas/journal/journal.schema.js"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema.js"


// Input
export const createTransactionBody = v.object({
    accountNumber: accountSchema.entries.number,
    journalAcronym: v.optional(journalSchema.entries.acronym),
    idAttachment: v.optional(transactionSchema.entries.idAttachment),
    label: transactionSchema.entries.label,
    date: transactionSchema.entries.date,
    debit: v.optional(transactionSchema.entries.debit),
    credit: v.optional(transactionSchema.entries.credit)
})


// Output
export const createTransactionReturn = transactionSchema
