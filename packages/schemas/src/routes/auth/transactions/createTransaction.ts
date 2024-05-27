import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema"


// Input
export const createTransactionBody = v.object({
    label: transactionSchema.entries.label,
    date: transactionSchema.entries.date
})


// Output
export const createTransactionReturn = transactionSchema
