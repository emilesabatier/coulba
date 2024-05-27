import * as v from "valibot"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema"


// Input
export const validateTransactionParams = v.object({
    idTransaction: transactionSchema.entries.id
})


// Output
export const validateTransactionReturn = v.object({})
