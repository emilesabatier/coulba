import * as v from "valibot"

export const sirenSchema = v
    .string([
        v.regex(/^[0-9]/, "Seulement des chiffres doivent être renseignés."),
        v.length(9, "La longueur doit être de 9.")
    ])
