import * as v from "valibot"
import { accountStatementSchema } from "../../../schemas/accountStatement/accountStatement.schema.js"
import { statementSchema } from "../../../schemas/statement/statement.schema.js"


// Input
export const readStatementParams = v.object({
    idStatement: v.optional(statementSchema.entries.id)
})

// Output
export const readStatementReturn = v.merge([
    statementSchema,
    v.object({
        accountStatements: v.array(accountStatementSchema)
    })
])
