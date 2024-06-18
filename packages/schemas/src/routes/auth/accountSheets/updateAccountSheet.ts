import * as v from "valibot"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema.js"


// Input
export const updateAccountStatementParams = v.object({
    idAccountSheet: accountSheetSchema.entries.id
})

export const updateAccountStatementBody = v.partial(v.object({
    idAccount: accountSheetSchema.entries.idAccount,
    flow: accountSheetSchema.entries.flow,
    isAllowance: accountSheetSchema.entries.isAllowance,
}))


// Output
export const updateAccountStatementReturn = accountSheetSchema
