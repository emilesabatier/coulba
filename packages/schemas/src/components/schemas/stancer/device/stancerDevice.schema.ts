import { z } from "zod"


export const stancerDeviceSchema = z.object({
    ip: z.string().ip(),
    port: z.number().int().min(0).max(65535),
    user_agent: z.string().max(256).nullish(),
    http_accept: z.string().max(2048).nullish(),
    languages: z.string().max(32).nullish(),
    city: z.string(),
    country: z.string(),
})
