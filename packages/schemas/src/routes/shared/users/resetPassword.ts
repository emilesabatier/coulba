import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const resetPasswordBody = v.object({
    email: userSchema.entries.emailAddress
})
