import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const deleteUserParams = v.object({
    idUser: userSchema.entries.id
})

// Output
export const deleteUserReturn = userSchema
