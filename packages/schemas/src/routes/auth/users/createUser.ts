import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const createUserBody = v.object({
    alias: userSchema.entries.alias,
    email: userSchema.entries.email,
    isAdmin: v.optional(userSchema.entries.isAdmin),
})


// Output
export const createUserReturn = userSchema
