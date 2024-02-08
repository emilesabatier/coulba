import z from "zod"
import { userInclude } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneUserParams = userSchema.pick({ id: true })
export type ReadOneUserParams = z.infer<typeof readOneUserParams>


// Output
export const readOneUserReturn = userSchema.pick(userInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneUserReturn = z.infer<typeof readOneUserReturn>
