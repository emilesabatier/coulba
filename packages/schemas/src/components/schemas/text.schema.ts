import * as v from "valibot"

export const textSchema = v.nullish(v
    .string([
        v.toTrimmed()
    ])
)
