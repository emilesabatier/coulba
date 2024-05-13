import * as v from "valibot"
import { requiredTextSchema } from "../../../components/schemas/requiredText.schema.js"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const signInBody = v.object({
    email: userSchema.entries.email,
    password: requiredTextSchema
})


// Output
export const signInReturn = v.object({})
