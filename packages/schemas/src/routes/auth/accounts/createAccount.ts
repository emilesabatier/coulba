import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const createAccountBody = v.object({
    idParent: accountSchema.entries.idParent,
    number: accountSchema.entries.number,
    label: accountSchema.entries.label
})


// Output
export const createAccountReturn = accountSchema
