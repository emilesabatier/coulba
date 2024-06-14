import * as v from "valibot"
import { textSchema } from "../../../components/schemas/text.schema.js"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const updateEmailBody = v.object({
    currentPassword: v.nonNullish(textSchema, "Le mot de passe doit être renseigné"),
    emailToValidate: v.nonNullish(userSchema.entries.emailToValidate, "L'email doit être renseigné")
})

// Output
export const updateEmailReturn = v.object({})
