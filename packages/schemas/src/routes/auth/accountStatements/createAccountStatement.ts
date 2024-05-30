import * as v from "valibot"
import { accountStatementSchema } from "../../../schemas/accountStatement/accountStatement.schema"


// Input
export const createAccountStatementBody = v.object({
    idAccount: accountStatementSchema.entries.idAccount,
    idStatement: accountStatementSchema.entries.idStatement
})


// Output
export const createAccountStatementReturn = accountStatementSchema
