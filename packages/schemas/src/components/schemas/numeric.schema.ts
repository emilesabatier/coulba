import * as v from "valibot"

export const numericSchema = v
    .string([
        v.custom((value) => !isNaN(Number(value)), "Doit être un nombre")
    ])
