import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema.js"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema.js"


// Input
export const updateAccountParams = v.object({
    idAccount: accountSchema.entries.id
})

export const updateAccountBody = v.partial(v.object({
    idStatement: accountSchema.entries.idStatement,
    idParent: accountSchema.entries.idParent,
    number: accountSchema.entries.number,
    label: accountSchema.entries.label,
    system: accountSchema.entries.system,
    accountSheets: v.array(v.object({
        idSheet: accountSheetSchema.entries.idSheet,
        flow: accountSheetSchema.entries.flow,
        isAllowance: accountSheetSchema.entries.isAllowance,
    }))
}))


// Output
export const updateAccountReturn = accountSchema
