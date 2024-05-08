import * as v from "valibot"

export const idSchema = v
    .string([
        v.toTrimmed()
    ])
