import * as v from "valibot"
import { computationStatementSchema } from "../../../schemas/computationStatement/computationStatement.schema.js"


// Input
export const deleteComputationStatementParams = v.object({
    idComputationStatement: computationStatementSchema.entries.id
})


// Output
export const deleteComputationStatementReturn = computationStatementSchema
