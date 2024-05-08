import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema.js"
import { requiredTextSchema } from "../../../components/schemas/requiredText.schema.js"


// Input
export const updatePasswordBody = v.object({
    currentPassword: requiredTextSchema,
    newPassword: passwordSchema,
    newPasswordCheck: passwordSchema,
},
    [
        v.custom(
            (context) => context.newPassword === context.newPasswordCheck,
            'Les mots de passe ne sont pas identiques'
        ),
    ])

// Output
export const updatePasswordReturn = v.object({})
