import { z } from "zod"
import { stancerPaymentSchema } from "./stancerPayment.schema.js"


export const readStancerPaymentQuerySchema = z.object({
    id_payment: stancerPaymentSchema.shape.id,
})

export const readStancerPaymentReturnSchema = stancerPaymentSchema
