import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema"


// Input
export const updateAccountParams = v.object({
    idAccount: accountSchema.entries.id
})

export const updateAccountBody = v.partial(v.object({
    idSheet: accountSchema.entries.idSheet,
    idStatement: accountSchema.entries.idStatement,
    idAccountParent: accountSchema.entries.idAccountParent,
    number: accountSchema.entries.number,
    label: accountSchema.entries.label
}))


// Output
export const updateAccountReturn = accountSchema
