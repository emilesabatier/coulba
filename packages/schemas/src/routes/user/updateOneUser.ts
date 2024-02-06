import z from "zod"
import { userSchema } from "../../models/user/user.schema.js"


// Input
export const updateOneUserParams = userSchema.pick({ id: true })
export type UpdateOneUserParams = z.infer<typeof updateOneUserParams>

export const updateOneUserBody = z.object({
    forename: userSchema.shape.forename,
    surname: userSchema.shape.surname,
    emailAddress: userSchema.shape.emailAddress,
    isActive: userSchema.shape.isActive,
}).partial()
export type UpdateOneUserBody = z.infer<typeof updateOneUserBody>


// Output
export const updateOneUserReturn = userSchema.pick({ id: true })
export type UpdateOneUserReturn = z.infer<typeof updateOneUserReturn>
