import { z } from "zod"
import { stancerCardSchema } from "./stancerCard.schema"


export const readStancerCardQuerySchema = z.object({
    id_card: stancerCardSchema.shape.id,
})


export const readStancerCardReturnSchema = z.object({
    brand: stancerCardSchema.shape.brand,
    country: stancerCardSchema.shape.country,
    created: stancerCardSchema.shape.created,
    exp_month: stancerCardSchema.shape.exp_month,
    exp_year: stancerCardSchema.shape.exp_year,
    external_id: stancerCardSchema.shape.external_id.nullable(),
    funding: stancerCardSchema.shape.funding.nullable(),
    id: stancerCardSchema.shape.id,
    last4: stancerCardSchema.shape.last4,
    live_mode: stancerCardSchema.shape.live_mode,
    name: stancerCardSchema.shape.name.nullable(),
    nature: stancerCardSchema.shape.nature.nullable(),
    network: stancerCardSchema.shape.network.nullable(),
    zip_code: stancerCardSchema.shape.zip_code.nullable(),
})
