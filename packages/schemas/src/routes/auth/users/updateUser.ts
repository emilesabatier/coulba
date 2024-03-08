import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const updateUserParams = v.object({
    idUser: userSchema.entries.id
})

export const updateUserBody = v.partial(v.object({
    forename: userSchema.entries.forename,
    surname: userSchema.entries.surname,
    emailAddress: userSchema.entries.emailAddress,
    isActive: userSchema.entries.isActive,
}))


// Output
export const updateUserReturn = userSchema
