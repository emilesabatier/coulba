import * as v from "valibot"

export const colorSchema = v
    .string([
        v.toTrimmed(),
        v.length(7),
        v.regex(/^#/, "Un format hexadécimal est requis.")
    ])
