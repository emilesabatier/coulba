import * as v from "valibot"
import { accountStatementSchema } from "../../../schemas/accountStatement/accountStatement.schema.js"


// Input
export const deleteAccountStatementParams = v.object({
    idAccountStatement: accountStatementSchema.entries.id
})


// Output
export const deleteAccountStatementReturn = accountStatementSchema
