import * as v from "valibot"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const deleteOneUserParams = v.object({
    idUser: userSchema.entries.id
})

// Output
export const deleteOneUserReturn = userSchema
