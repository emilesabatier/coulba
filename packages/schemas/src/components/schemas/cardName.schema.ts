import * as v from "valibot"

export const cardNameSchema = v
    .string([
        v.minLength(4, 'Trop court (min. 4)'),
        v.maxLength(64, 'Trop long (max. 64)'),
    ])
