import { z } from "zod"
import { stancerAuthSchema } from "../auth/stancerAuth.schema"
import { stancerCardSchema } from "../card/stancerCard.schema"
import { stancerDeviceSchema } from "../device/stancerDevice.schema"

const currencyEnum = <const>["EUR", "USD", "GBP"]
const methodEnum = <const>["card", "sepa"]
const statusEnum = <const>["authorized", "canceled", "captured", "capture_sent", "disputed", "expired", "failed", "refused", "to_capture", "authorize", "capture"]
const responseEnum = <const>["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "19", "20", "21", "22", "25", "28", "30", "41", "43", "51", "52", "53", "54", "55", "57", "58", "59", "61", "62", "63", "65", "68", "75", "76", "77", "78", "80", "81", "82", "83", "85", "91", "92", "93", "94", "95", "96", "A0", "A1", "B1", "N0", "N3", "N4", "N7", "P2", "P5", "P6", "Q1", "R0", "R1", "R3", "XA", "XD", "Z1", "Z3", "7810", "7811", "7840", "7898"]

export const stancerPaymentSchema = z.object({
    id: z.string().length(29),
    amount: z.number().int().min(50),
    currency: z.enum(currencyEnum),
    description: z.string().min(3).max(64),
    order_id: z.string().min(1).max(36),
    unique_id: z.string().min(1).max(36),
    methods_allowed: z.enum(methodEnum).array().nullable(),
    method: z.enum(methodEnum).nullable(),
    card: z.union([stancerCardSchema, stancerCardSchema.shape.id]),
    // sepa: ,
    // customer: ,
    // refunds: ,
    status: z.enum(statusEnum),
    response: z.union([z.enum(responseEnum), z.string()]),
    auth: stancerAuthSchema,
    device: stancerDeviceSchema,
    capture: z.boolean(),
    created: z.number().int().min(0),
    date_bank: z.number().int().min(0),
    return_url: z.string().max(2048),
    live_mode: z.boolean(),
})
