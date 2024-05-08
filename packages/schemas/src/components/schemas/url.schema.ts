import * as v from "valibot"

export const urlSchema = v
    .string([
        v.toTrimmed(),
        v.url("Doit être une URL valide.")
    ])
