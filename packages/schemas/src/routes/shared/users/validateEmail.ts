import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const validateEmailBody = v.object({
    id: userSchema.entries.id,
    emailToken: userSchema.entries.emailToken
})


// Output
export const validateEmailReturn = v.object({})
