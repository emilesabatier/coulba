import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const createAccountBody = v.object({
    idSheet: accountSchema.entries.idSheet,
    idStatement: accountSchema.entries.idStatement,
    idAccountParent: v.optional(accountSchema.entries.idAccountParent),
    number: accountSchema.entries.number,
    label: accountSchema.entries.label
})


// Output
export const createAccountReturn = accountSchema
