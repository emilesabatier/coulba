import * as v from "valibot"
import { statementSchema } from "../../../schemas/statement/statement.schema.js"


// Input
export const createStatementBody = v.object({
    idStatementParent: v.optional(statementSchema.entries.idStatementParent),
    number: statementSchema.entries.number,
    label: statementSchema.entries.label
})


// Output
export const createStatementReturn = statementSchema
