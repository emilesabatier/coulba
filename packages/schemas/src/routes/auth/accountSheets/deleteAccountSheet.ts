import * as v from "valibot"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema"


// Input
export const deleteAccountStatementParams = v.object({
    idAccountSheet: accountSheetSchema.entries.id
})


// Output
export const deleteAccountStatementReturn = accountSheetSchema
