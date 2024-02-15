import * as v from "valibot"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const readOneUserParams = v.object({
    idUser: userSchema.entries.id
})

// Output
export const readOneUserReturn = v.merge([
    v.pick(userSchema, userKeys),
    v.object({
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
