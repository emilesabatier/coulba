import * as v from "valibot"
import { computationStatementSchema } from "../../../schemas/computationStatement/computationStatement.schema.js"


// Input
export const readComputationStatementParams = v.object({
    idComputationStatement: v.optional(computationStatementSchema.entries.id)
})

// Output
export const readComputationStatementReturn = computationStatementSchema

