import * as v from "valibot"
import { computationSchema } from "../../../schemas/computation/computation.schema.js"


// Input
export const deleteComputationParams = v.object({
    idComputation: computationSchema.entries.id
})


// Output
export const deleteComputationReturn = computationSchema
