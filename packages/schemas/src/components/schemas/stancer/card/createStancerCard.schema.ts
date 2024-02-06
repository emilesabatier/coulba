import { z } from "zod"
import { stancerCardSchema } from "./stancerCard.schema.js"


export const createStancerCardDataSchema = z.object({
    number: stancerCardSchema.shape.number,
    exp_month: stancerCardSchema.shape.exp_month,
    exp_year: stancerCardSchema.shape.exp_year,
    cvc: stancerCardSchema.shape.cvc.optional(),
    name: stancerCardSchema.shape.name.optional(),
    tokenize: stancerCardSchema.shape.tokenize.optional(),
    zip_code: stancerCardSchema.shape.zip_code.optional()
})


export const createStancerCardReturnSchema = z.object({
    id: stancerCardSchema.shape.id
})
