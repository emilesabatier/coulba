import * as v from "valibot"

export const ipSchema = v
    .string([
        v.toTrimmed(),
        v.ipv4("Doit être une ip valide.")
    ])
