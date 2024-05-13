import * as v from "valibot"
import { computationSchema } from "../../../schemas/computation/computation.schema.js"
import { computationStatementSchema } from "../../../schemas/computationStatement/computationStatement.schema.js"


// Input
export const createComputationBody = v.object({
    number: computationSchema.entries.number,
    label: computationSchema.entries.label,
    computationStatements: v.array(v.object({
        idStatement: computationStatementSchema.entries.idStatement,
        operation: computationStatementSchema.entries.operation
    }))
})


// Output
export const createComputationReturn = computationSchema
