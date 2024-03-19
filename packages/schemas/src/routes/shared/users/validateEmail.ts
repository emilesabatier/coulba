import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const validateEmailBody = v.object({
    id: userSchema.entries.id,
    token: userSchema.entries.emailToken,
    email: userSchema.entries.emailTemporary
})
