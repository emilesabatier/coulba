import { Context, } from "hono"
import * as v from "valibot"
import { env } from "../env"


export function paramsValidator<T extends v.ObjectSchema<{}>>(schema: T) {
    return (value: any, c: Context<any, string, {}>) => {
        const parsed = v.safeParse(schema, value)
        if (!parsed.success) {
            if (env()?.ENV !== "production") console.log(parsed.issues)
            return c.text('Url de la requête invalide.', 401)
        }
        return parsed.output
    }
}
