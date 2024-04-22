import * as v from "valibot"

export const cardExpirationMonthSchema = v
    .string([
        v.regex(
            /^(0[1-9]|1[012])$/,
            "Format requis: 01 ou 12."
        )
    ])
