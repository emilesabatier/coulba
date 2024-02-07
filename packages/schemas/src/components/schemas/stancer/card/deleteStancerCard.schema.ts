import { z } from "zod"
import { stancerCardSchema } from "./stancerCard.schema"


export const deleteStancerCardQuerySchema = z.object({
    id_card: stancerCardSchema.shape.id,
})

export const deleteStancerCardReturnSchema = z.undefined()
