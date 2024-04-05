import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema.js"


// Input
export const readTransactionParams = v.object({
    idTransaction: v.optional(transactionSchema.entries.id)
})

// Output
export const readTransactionReturn = transactionSchema
