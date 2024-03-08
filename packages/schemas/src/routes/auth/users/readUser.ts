import * as v from "valibot"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const readUserParams = v.object({
    idUser: v.optional(userSchema.entries.id)
})

// Output
export const readUserReturn = v.pick(userSchema, userKeys)
