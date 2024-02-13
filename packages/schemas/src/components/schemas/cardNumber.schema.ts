import * as v from "valibot"

export const cardNumberSchema = v
    .string([
        v.regex(/^[0-9]/, "Seulement des chiffres doivent être renseignés."),
        v.length(16, "La longueur doit être de 16.")
    ])
