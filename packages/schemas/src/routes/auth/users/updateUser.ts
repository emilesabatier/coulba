import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const updateUserParams = v.object({
    idUser: userSchema.entries.id
})

export const updateUserBody = v.partial(v.object({
    alias: userSchema.entries.alias,
    email: userSchema.entries.email,
    isAdmin: userSchema.entries.isAdmin,
}))


// Output
export const updateUserReturn = userSchema
