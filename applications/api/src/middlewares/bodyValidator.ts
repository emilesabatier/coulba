import { Context, } from "hono"
import * as v from "valibot"
import { env } from "../env.js"


export function bodyValidator<T extends v.ObjectSchema<v.ObjectEntries>>(schema: T) {
    return (value: unknown, c: Context<Record<string, never>, string, Record<string, never>>) => {
        const parsed = v.safeParse(schema, value)
        if (!parsed.success) {
            if (env()?.ENV !== "production") console.log(parsed.issues)
            return c.text('Données de la requête invalides.', 401)
        }
        return parsed.output
    }
}
