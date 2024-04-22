import * as v from "valibot"

export const requiredTextSchema = v.string([
    v.toTrimmed(),
    v.minLength(1, 'Champ requis'),
])
