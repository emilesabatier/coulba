import * as v from "valibot"
import { statementSchema } from "../../../schemas/statement/statement.schema"


// Input
export const readStatementParams = v.object({
    idStatement: v.optional(statementSchema.entries.id)
})

// Output
export const readStatementReturn = statementSchema
