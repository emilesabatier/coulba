import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const signInBody = v.object({
    email: userSchema.entries.email,
    password: passwordSchema
})


// Output
export const signInReturn = v.object({})
