import * as v from "valibot"
import { computationStatementSchema } from "../../../schemas/computationStatement/computationStatement.schema.js"


// Input
export const createComputationStatementBody = v.object({
    idComputation: computationStatementSchema.entries.idComputation,
    idStatement: computationStatementSchema.entries.idStatement,
    operation: computationStatementSchema.entries.operation
})


// Output
export const createComputationStatementReturn = computationStatementSchema
