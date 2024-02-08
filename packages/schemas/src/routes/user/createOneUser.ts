import { z } from "zod"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const createOneUserBody = z.object({
    forename: userSchema.shape.forename,
    surname: userSchema.shape.surname,
    emailAddress: userSchema.shape.emailAddress,
    isActive: userSchema.shape.isActive.optional(),
})
export type CreateOneUserBody = z.infer<typeof createOneUserBody>


// Output
export const createOneUserReturn = userSchema.pick({ id: true })
export type CreateOneUserReturn = z.infer<typeof createOneUserReturn>
