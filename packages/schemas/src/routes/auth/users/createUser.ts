import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const createUserBody = v.object({
    forename: userSchema.entries.forename,
    surname: userSchema.entries.surname,
    email: userSchema.entries.email,
    isAdmin: v.optional(userSchema.entries.isAdmin),
})


// Output
export const createUserReturn = userSchema
