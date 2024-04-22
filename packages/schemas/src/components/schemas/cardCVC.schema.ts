import * as v from "valibot"

export const cardCVCSchema = v
    .string([
        v.regex(
            /^\d{3}$/,
            "Format requis: 000 ou 999."
        )
    ])
