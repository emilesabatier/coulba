import * as v from "valibot"
import { computationStatementSchema } from "../../../schemas/computationStatement/computationStatement.schema"


// Input
export const updateComputationStatementParams = v.object({
    idComputationStatement: computationStatementSchema.entries.id
})

export const updateComputationStatementBody = v.partial(v.object({
    operation: computationStatementSchema.entries.operation
}))


// Output
export const updateComputationStatementReturn = computationStatementSchema
