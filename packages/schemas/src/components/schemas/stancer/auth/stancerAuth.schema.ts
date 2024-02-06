import { z } from "zod"


const statusEnum = <const>["attempted", "available", "declined", "expired", "failed", "requested", "success", "unavailable"]

export const stancerAuthSchema = z.object({
    redirect_url: z.string().max(2048),
    return_url: z.string().max(2048),
    status: z.enum(statusEnum)
})
