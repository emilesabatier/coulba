import { z } from "zod"
import { textSchema } from "../../components/schemas/text.schema.js"
import { userSchema } from "../../models/user/user.schema.js"


// Input
export const signInBody = z.object({
    email: userSchema.shape.emailAddress,
    password: textSchema.min(2, { message: "Trop court (min. 2)" })
})
export type SignInBody = z.infer<typeof signInBody>
