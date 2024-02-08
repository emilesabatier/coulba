import z from "zod"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const validateEmailBody = z.object({
    id: userSchema.shape.id,
    token: userSchema.shape.emailToken,
    email: userSchema.shape.emailAddressTemporary
})
export type ValidateEmailBody = z.infer<typeof validateEmailBody>
