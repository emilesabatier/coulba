import * as v from "valibot"
import { computationSchema } from "../../../schemas/computation/computation.schema.js"


// Input
export const updateComputationParams = v.object({
    idComputation: computationSchema.entries.id
})

export const updateComputationBody = v.partial(v.object({
    number: computationSchema.entries.number,
    label: computationSchema.entries.label
}))


// Output
export const updateComputationReturn = computationSchema
