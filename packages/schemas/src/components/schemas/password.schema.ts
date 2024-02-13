import * as v from "valibot"

export const passwordSchema = v
    .string([
        v.minLength(8, 'Votre mot de passe est trop court (min. 8).'),
        v.maxLength(32, 'Votre mot de passe est trop long (max. 32).'),
        v.regex(/[a-z]/, 'Doit contenir une lettre minuscule.'),
        v.regex(/[A-Z]/, 'Doit contenir une lettre majuscule.'),
        v.regex(/[0-9]/, 'Doit contenir un chiffre.'),
    ])
