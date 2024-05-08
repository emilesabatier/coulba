import 'dotenv/config'
import * as v from 'valibot'


enum Env {
    development = 'development',
    test = 'test',
    production = 'production'
}

const envSchema = v.object({
    NODE_ENV: v.enum_(Env),
    DATABASE_URL: v.string()
})


export function env() {
    try {
        return v.parse(envSchema, process.env)
    } catch (error) {
        if (error instanceof v.ValiError) {
            const errorMessage = v.flatten<typeof envSchema>(error)
            // const errorMessage = Object.records(fieldErrors)
            //     .map(([field, errors]) =>
            //         errors ? `${field}: ${errors.join(", ")}` : field,
            //     )
            //     .join("\n  ")
            console.log(errorMessage)
            throw new Error(`Missing environment variables`)
        }
    }
}
