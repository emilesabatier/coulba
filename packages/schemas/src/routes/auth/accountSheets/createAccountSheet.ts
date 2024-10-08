import * as v from "valibot"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema.js"


// Input
export const createAccountStatementBody = v.object({
    idAccount: accountSheetSchema.entries.idAccount,
    idSheet: accountSheetSchema.entries.idSheet,
    flow: accountSheetSchema.entries.flow,
    isAllowance: accountSheetSchema.entries.isAllowance
})


// Output
export const createAccountStatementReturn = accountSheetSchema
