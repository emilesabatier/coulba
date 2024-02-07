import { z } from "zod"
import { stancerPaymentSchema } from "./stancerPayment.schema"


export const readStancerPaymentQuerySchema = z.object({
    id_payment: stancerPaymentSchema.shape.id,
})

export const readStancerPaymentReturnSchema = stancerPaymentSchema
