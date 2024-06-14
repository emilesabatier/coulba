import * as v from "valibot"
import { computationSchema } from "../../../schemas/computation/computation.schema.js"


// Input
export const createComputationBody = v.object({
    number: computationSchema.entries.number,
    label: computationSchema.entries.label
})


// Output
export const createComputationReturn = computationSchema
