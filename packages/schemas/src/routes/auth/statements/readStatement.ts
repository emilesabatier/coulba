import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"
import { statementSchema } from "../../../schemas/statement/statement.schema.js"


// Input
export const readStatementParams = v.object({
    idStatement: v.optional(statementSchema.entries.id)
})

// Output
export const readStatementReturn = v.merge([
    statementSchema,
    v.object({
        accounts: v.array(accountSchema)
    })
])
