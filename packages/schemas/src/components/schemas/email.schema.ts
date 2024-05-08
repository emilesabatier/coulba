import * as v from "valibot"

export const emailSchema = v
    .string([
        v.toTrimmed(),
        v.toLowerCase(),
        v.email('Le format email est requis.'),
        v.maxLength(64, "L'email est trop long."),
    ])
