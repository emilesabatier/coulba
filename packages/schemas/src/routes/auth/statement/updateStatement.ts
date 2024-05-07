import * as v from "valibot"
import { statementSchema } from "../../../schemas/statement/statement.schema.js"


// Input
export const updateStatementParams = v.object({
    idStatement: statementSchema.entries.id
})

export const updateStatementBody = v.partial(v.object({
    idParent: statementSchema.entries.idParent,
    number: statementSchema.entries.number,
    label: statementSchema.entries.label
}))


// Output
export const updateStatementReturn = statementSchema
