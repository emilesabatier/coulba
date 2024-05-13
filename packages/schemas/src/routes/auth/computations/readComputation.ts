import * as v from "valibot"
import { computationSchema } from "../../../schemas/computation/computation.schema.js"
import { computationStatementSchema } from "../../../schemas/computationStatement/computationStatement.schema.js"


// Input
export const readComputationParams = v.object({
    idComputation: v.optional(computationSchema.entries.id)
})

// Output
export const readComputationReturn = v.merge([
    computationSchema,
    v.object({
        computationStatements: v.array(computationStatementSchema)
    })
])

