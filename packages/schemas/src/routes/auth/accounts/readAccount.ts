import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const readAccountParams = v.object({
    idAccount: v.optional(accountSchema.entries.id)
})

// Output
export const readAccountReturn = accountSchema
