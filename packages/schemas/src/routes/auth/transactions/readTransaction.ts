import * as v from "valibot"
import { recordSchema } from "../../../schemas/record/record.schema"
import { transactionSchema } from "../../../schemas/transaction/transaction.schema"


// Input
export const readTransactionParams = v.object({
    idTransaction: v.optional(transactionSchema.entries.id)
})

// Output
export const readTransactionReturn = v.merge([
    transactionSchema,
    v.object({
        records: v.array(recordSchema)
    })
])
