import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema.js"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const createCompanyBody = v.object({
    user: v.object({
        alias: userSchema.entries.alias,
        email: userSchema.entries.email,
        password: passwordSchema,
        passwordCheck: passwordSchema
    })
})


// Output
export const createCompanyReturn = v.object({})
