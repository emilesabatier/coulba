import z from "zod"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const resetPasswordBody = z.object({
    email: userSchema.shape.emailAddress
})
export type ResetPasswordBody = z.infer<typeof resetPasswordBody>
