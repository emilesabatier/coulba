import { z } from "zod"
import { stancerPaymentSchema } from "./stancerPayment.schema"


export const createStancerPaymentDataSchema = z.object({
    amount: stancerPaymentSchema.shape.amount,
    currency: stancerPaymentSchema.shape.currency,
    description: stancerPaymentSchema.shape.description.nullish(),
    order_id: stancerPaymentSchema.shape.order_id.nullish(),
    unique_id: stancerPaymentSchema.shape.unique_id.nullish(),
    methods_allowed: stancerPaymentSchema.shape.methods_allowed.nullish(),
    auth: stancerPaymentSchema.shape.auth.nullish(),
})


export const createStancerPaymentReturnSchema = z.object({
    amount: stancerPaymentSchema.shape.amount,
    currency: stancerPaymentSchema.shape.currency,
    description: stancerPaymentSchema.shape.description.nullish(),
    order_id: stancerPaymentSchema.shape.order_id.nullish(),
    unique_id: stancerPaymentSchema.shape.unique_id.nullish(),
    methods_allowed: stancerPaymentSchema.shape.methods_allowed.nullish(),
    auth: stancerPaymentSchema.shape.auth.nullish(),
    id: stancerPaymentSchema.shape.id,
    created: stancerPaymentSchema.shape.created,
    method: stancerPaymentSchema.shape.method,
    statud: stancerPaymentSchema.shape.status,
    response: stancerPaymentSchema.shape.response,
    card: stancerPaymentSchema.shape.card.nullish(),
    // sepa: stancerPaymentSchema.shape.sepa.nullish(),
    // customer: stancerPaymentSchema.shape.customer.nullish(),
    device: stancerPaymentSchema.shape.device.nullish(),
    capture: stancerPaymentSchema.shape.capture.nullish(),
    live_mode: stancerPaymentSchema.shape.live_mode.nullish(),
})
