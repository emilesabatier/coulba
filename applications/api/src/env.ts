import * as v from 'valibot'

enum Env {
    development = 'development',
    test = 'test',
    production = 'production'
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
    V1_API_KEY_SALT: v.string(),
    API_BASE_URL: v.string(),
    APP_BASE_URL: v.string(),
    WEBSITE_BASE_URL: v.string(),
    STANCER_PRIVATE_KEY: v.string(),
    STANCER_PUBLIC_KEY: v.string(),
    SCW_BUCKET_ENDPOINT: v.string(),
    SCW_ACCESS_KEY: v.string(),
    SCW_SECRET_KEY: v.string(),
    SCW_BUCKET_NAME: v.string()
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
