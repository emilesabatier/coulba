import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema"


// Input
export const updateTransactionParams = v.object({
    idTransaction: transactionSchema.entries.id
})

export const updateTransactionBody = v.partial(v.object({
    label: transactionSchema.entries.label,
    date: transactionSchema.entries.date
}))


// Output
export const updateTransactionReturn = transactionSchema
