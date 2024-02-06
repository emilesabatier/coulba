import type { Config } from "drizzle-kit"
import { env } from "./src/env"


export default {
    schema: "./src/schemas.ts",
    out: "./drizzle",
    driver: "pg",
    strict: true,
    dbCredentials: {
        connectionString: env()?.DATABASE_URL ?? "",
    },
    verbose: true,
} satisfies Config
