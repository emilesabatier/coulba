import * as v from "valibot"
import { statementSchema } from "../../../schemas/statement/statement.schema.js"


// Input
export const createStatementBody = v.object({
    idParent: statementSchema.entries.idParent,
    number: statementSchema.entries.number,
    label: statementSchema.entries.label,
    addedNetAmount: statementSchema.entries.addedNetAmount
})


// Output
export const createStatementReturn = statementSchema
