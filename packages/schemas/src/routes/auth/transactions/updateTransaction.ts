import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema.js"


// Input
export const updateTransactionParams = v.object({
    idTransaction: transactionSchema.entries.id
})

export const updateTransactionBody = v.partial(v.object({
    idAccount: transactionSchema.entries.idAccount,
    idJournal: transactionSchema.entries.idJournal,
    idAttachment: transactionSchema.entries.idAttachment,
    label: transactionSchema.entries.label,
    date: transactionSchema.entries.date,
    debit: transactionSchema.entries.debit,
    credit: transactionSchema.entries.credit,
}))


// Output
export const updateTransactionReturn = transactionSchema
