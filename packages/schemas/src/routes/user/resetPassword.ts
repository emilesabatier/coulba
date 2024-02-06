import z from "zod"
import { userSchema } from "../../models/user/user.schema.js"


// Input
export const resetPasswordBody = z.object({
    email: userSchema.shape.emailAddress
})
export type ResetPasswordBody = z.infer<typeof resetPasswordBody>
