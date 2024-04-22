import 'dotenv/config'
import { z } from "zod"


const envSchema = z.object({
    NODE_ENV: z.enum(["development", "preview", "production"]),
    DATABASE_URL: z.string()
})


export function env() {
    try {
        return envSchema.parse(process.env)
    } catch (err) {
        if (err instanceof z.ZodError) {
            const { fieldErrors } = err.flatten()
            const errorMessage = Object.records(fieldErrors)
                .map(([field, errors]) =>
                    errors ? `${field}: ${errors.join(", ")}` : field,
                )
                .join("\n  ")
            throw new Error(
                `Missing environment variables:\n  ${errorMessage}`,
            )
        }
    }
}
