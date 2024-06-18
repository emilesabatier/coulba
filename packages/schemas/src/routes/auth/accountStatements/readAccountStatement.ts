import * as v from "valibot"
import { accountStatementSchema } from "../../../schemas/accountStatement/accountStatement.schema.js"


// Input
export const readAccountStatementParams = v.object({
    idAccountStatement: v.optional(accountStatementSchema.entries.id)
})

// Output
export const readAccountStatementReturn = accountStatementSchema
