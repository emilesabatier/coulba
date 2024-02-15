import * as v from 'valibot'

enum Env {
    development = 'development',
    test = 'test',
    production = 'production',
    demo = 'demo',
}

const envSchema = v.object({
    ENV: v.enum_(Env),
    PORT: v.string(),
    COOKIES_DOMAIN: v.string(),
    CORS_ORIGIN: v.string(),
    DATABASE_URL: v.string(),
    SESSION_PRIVATE_KEY: v.string(),
    SESSION_LIFETIME: v.string(),
    COOKIES_KEY: v.string(),
    API_BASE_URL: v.string(),
    APP_BASE_URL: v.string(),
    WEBSITE_BASE_URL: v.string(),
    STANCER_PRIVATE_KEY: v.string(),
    STANCER_PUBLIC_KEY: v.string(),
})


export function env() {
    try {
        return v.parse(envSchema, process.env)
    } catch (error) {
        if (error instanceof v.ValiError) {
            const errorMessage = v.flatten<typeof envSchema>(error)
            // const errorMessage = Object.entries(fieldErrors)
            //     .map(([field, errors]) =>
            //         errors ? `${field}: ${errors.join(", ")}` : field,
            //     )
            //     .join("\n  ")
            console.log(errorMessage)
            throw new Error(`Missing environment variables`)
        }
    }
}
