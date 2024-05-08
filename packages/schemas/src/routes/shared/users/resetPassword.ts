import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const resetPasswordBody = v.object({
    email: userSchema.entries.email
})


// Output
export const resetPasswordReturn = v.object({})
