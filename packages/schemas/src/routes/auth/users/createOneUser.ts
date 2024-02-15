import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const createOneUserBody = v.object({
    forename: userSchema.entries.forename,
    surname: userSchema.entries.surname,
    emailAddress: userSchema.entries.emailAddress,
    isActive: v.optional(userSchema.entries.isActive),
})


// Output
export const createOneUserReturn = userSchema
