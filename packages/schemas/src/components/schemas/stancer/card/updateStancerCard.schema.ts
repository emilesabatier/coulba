import { z } from "zod"
import { stancerCardSchema } from "./stancerCard.schema.js"


export const updateStancerCardQuerySchema = z.object({
    id_card: stancerCardSchema.shape.id,
})


export const updateStancerCardDataSchema = z.object({
    exp_month: stancerCardSchema.shape.exp_month,
    exp_year: stancerCardSchema.shape.exp_year,
    name: stancerCardSchema.shape.name,
    zip_code: stancerCardSchema.shape.zip_code
}).partial()


export const updateStancerCardReturnSchema = z.undefined()
