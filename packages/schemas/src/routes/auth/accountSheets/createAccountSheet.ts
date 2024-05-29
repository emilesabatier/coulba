import * as v from "valibot"
import { accountSchema } from "../../../schemas/account/account.schema"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema"


// Input
export const createAccountStatementBody = v.object({
    idAccount: accountSheetSchema.entries.idAccount,
    idSheet: accountSheetSchema.entries.idSheet,
    flow: accountSheetSchema.entries.flow,
    isAllowance: accountSheetSchema.entries.isAllowance
})


// Output
export const createAccountStatementReturn = accountSchema
