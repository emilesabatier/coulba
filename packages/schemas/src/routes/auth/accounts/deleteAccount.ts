import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const deleteAccountParams = v.object({
    idAccount: accountSchema.entries.id
})


// Output
export const deleteAccountReturn = accountSchema
