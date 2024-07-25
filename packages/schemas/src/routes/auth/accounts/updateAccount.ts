import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const updateAccountParams = v.object({
    idAccount: accountSchema.entries.id
})

export const updateAccountBody = v.partial(v.object({
    idParent: accountSchema.entries.idParent,
    isClass: accountSchema.entries.isClass,
    isSelectable: accountSchema.entries.isSelectable,
    number: accountSchema.entries.number,
    label: accountSchema.entries.label,
    type: accountSchema.entries.type
}))


// Output
export const updateAccountReturn = accountSchema
