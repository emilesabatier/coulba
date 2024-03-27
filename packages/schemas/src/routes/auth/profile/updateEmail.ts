import * as v from "valibot"
import { textSchema } from "../../../components/schemas/text.schema"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const updateEmailBody = v.object({
    currentPassword: textSchema,
    emailTemporary: userSchema.entries.emailTemporary,
})

// Output
export const updateEmailReturn = v.object({})
