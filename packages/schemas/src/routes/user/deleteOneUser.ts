import z from "zod"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const deleteOneUserParams = userSchema.pick({ id: true })
export type DeleteOneUserParams = z.infer<typeof deleteOneUserParams>


// Output
export const deleteOneUserReturn = userSchema.pick({ id: true })
export type DeleteOneUserReturn = z.infer<typeof deleteOneUserReturn>
