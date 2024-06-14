import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema.js"
import { textSchema } from "../../../components/schemas/text.schema.js"


// Input
export const updatePasswordBody = v.object({
    currentPassword: v.nonNullish(textSchema, "Le mot de passe actuel doit être renseigné"),
    newPassword: v.nonNullish(passwordSchema, "Le nouveau mot de passe doit être renseigné"),
    newPasswordCheck: v.nonNullish(passwordSchema, "Le nouveau mot de passe doit être renseigné")
},
    [
        v.custom(
            (context) => context.newPassword === context.newPasswordCheck,
            'Les mots de passe ne sont pas identiques'
        ),
    ])

// Output
export const updatePasswordReturn = v.object({})
