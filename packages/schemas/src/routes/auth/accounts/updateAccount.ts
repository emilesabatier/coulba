import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const updateAccountParams = v.object({
    idAccount: accountSchema.entries.id
})

export const updateAccountBody = v.partial(v.object({
    idSheet: accountSchema.entries.idSheet,
    flow: accountSchema.entries.flow,
    isAllowance: accountSchema.entries.isAllowance,
    idStatement: accountSchema.entries.idStatement,
    idAccountParent: accountSchema.entries.idAccountParent,
    number: accountSchema.entries.number,
    label: accountSchema.entries.label
}))


// Output
export const updateAccountReturn = accountSchema
