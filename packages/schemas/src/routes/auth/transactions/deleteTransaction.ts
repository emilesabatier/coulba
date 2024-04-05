import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema.js"


// Input
export const deleteTransactionParams = v.object({
    idTransaction: transactionSchema.entries.id
})

// Output
export const deleteTransactionReturn = transactionSchema
