import * as v from "valibot"
import { accountStatementSchema } from "../../../schemas/accountStatement/accountStatement.schema"


// Input
export const updateAccountStatementParams = v.object({
    idAccountStatement: accountStatementSchema.entries.id
})

export const updateAccountStatementBody = v.partial(v.object({
    idAccount: accountStatementSchema.entries.idAccount
}))


// Output
export const updateAccountStatementReturn = accountStatementSchema
