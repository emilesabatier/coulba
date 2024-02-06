import { z } from "zod"
import { stancerPaymentSchema } from "./stancerPayment.schema.js"


export const updateStancerPaymentQuerySchema = z.object({
    id_payment: stancerPaymentSchema.shape.id,
})


export const updateStancerPaymentDataSchema = z.object({
    amount: stancerPaymentSchema.shape.amount.nullish(),
    currency: stancerPaymentSchema.shape.currency.nullish(),
    order_id: stancerPaymentSchema.shape.order_id.nullish(),
    description: stancerPaymentSchema.shape.description.nullish(),
    return_url: stancerPaymentSchema.shape.return_url.nullish(),
    // customer: stancerPaymentSchema.shape.customer.nullish(),
    card: stancerPaymentSchema.shape.card.nullish(),
    // sepa: stancerPaymentSchema.shape.sepa.nullish(),
    device: stancerPaymentSchema.shape.device.nullish(),
    status: stancerPaymentSchema.shape.status.nullish(),
    auth: stancerPaymentSchema.shape.auth.nullish(),
})


export const updateStancerPaymentReturnSchema = z.undefined()
