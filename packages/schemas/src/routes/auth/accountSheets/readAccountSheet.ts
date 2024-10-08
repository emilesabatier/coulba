import * as v from "valibot"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema.js"


// Input
export const readAccountStatementParams = v.object({
    idAccountSheet: v.optional(accountSheetSchema.entries.id)
})

// Output
export const readAccountStatementReturn = accountSheetSchema
