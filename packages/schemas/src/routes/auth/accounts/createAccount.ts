import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"


// Input
export const createAccountBody = v.object({
    idParent: accountSchema.entries.idParent,
    isMandatory: accountSchema.entries.isMandatory,
    isClass: accountSchema.entries.isClass,
    isSelectable: accountSchema.entries.isSelectable,
    number: accountSchema.entries.number,
    label: accountSchema.entries.label,
    type: accountSchema.entries.type
})


// Output
export const createAccountReturn = accountSchema
