import { Context, } from "hono"
import * as v from "valibot"
import { env } from "../env"


export function bodyValidator<T extends v.ObjectSchema<{}>>(schema: T) {
    return (value: any, c: Context<any, string, {}>) => {
        const parsed = v.safeParse(schema, value)
        if (!parsed.success) {
            if (env()?.ENV !== "production") console.log(parsed.issues)
            return c.text('Paramètres de la requête invalides.', 401)
        }
        return parsed.output
    }
}
