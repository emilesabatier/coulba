import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const readOneAccountParams = v.object({
    idAccount: accountSchema.entries.id
})

// Output
export const readOneAccountReturn = v.merge([
    accountSchema,
    v.object({
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
