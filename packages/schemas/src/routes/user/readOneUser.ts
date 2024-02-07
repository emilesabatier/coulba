import z from "zod"
import { userInclude } from "../../models/user/user.include"
import { userSchema } from "../../models/user/user.schema"


// Input
export const readOneUserParams = userSchema.pick({ id: true })
export type ReadOneUserParams = z.infer<typeof readOneUserParams>


// Output
export const readOneUserReturn = userSchema.pick(userInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneUserReturn = z.infer<typeof readOneUserReturn>
