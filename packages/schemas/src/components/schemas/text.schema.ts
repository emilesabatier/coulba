import * as v from "valibot"

export const textSchema = v
    .string([
        v.toTrimmed()
    ])
