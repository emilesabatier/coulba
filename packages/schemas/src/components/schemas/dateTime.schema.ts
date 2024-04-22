import * as v from "valibot"

export const dateTimeSchema = v
    .string([
        v.isoTimestamp("Le format date est requis"),
    ])
