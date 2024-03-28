import * as v from "valibot"
import { statementSchema } from "../../../schemas/statement/statement.schema"


// Input
export const deleteStatementParams = v.object({
    idStatement: statementSchema.entries.id
})


// Output
export const deleteStatementReturn = statementSchema
