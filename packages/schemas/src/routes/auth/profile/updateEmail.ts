import * as v from "valibot"
import { textSchema } from "../../../components/schemas/text.schema.js"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const updateEmailBody = v.object({
    currentPassword: textSchema,
    emailToValidate: userSchema.entries.emailToValidate,
})

// Output
export const updateEmailReturn = v.object({})
