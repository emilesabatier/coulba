import * as v from "valibot"

export const numericSchema = v
    .string([
        v.decimal("Doit être un nombre valide, ex: 99,99")
    ])
