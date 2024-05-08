import * as v from "valibot"

export const integerSchema = v
    .number([
        v.integer("Doit être un nombre entier.")
    ])
