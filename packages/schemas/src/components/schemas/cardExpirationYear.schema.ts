import * as v from "valibot"

export const cardExpirationYearSchema = v
    .string([
        v.regex(
            /^(?:19|20|21)\d{2}$/,
            "Format requis: 1900 ou 2050."
        )
    ])
