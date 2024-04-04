import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema"


// Input
export const activateBody = v.object({
    password: v.nonNullish(passwordSchema, "Le mot de passe doit être renseigné"),
    passwordCheck: v.nonNullish(passwordSchema, "Le mot de passe doit être renseigné à nouveau")
},
    [
        v.custom(
            (context) => context.password === context.passwordCheck,
            'Les mots de passe ne sont pas identiques'
        ),
    ])

// Output
export const activateReturn = v.object({})
