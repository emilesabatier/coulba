import * as v from "valibot"
import { accountSchema } from "../../../../schemas/account/account.schema"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const settleSheetBody = v.object({
    idJournalClosing: journalSchema.entries.id,
    idAccountSheetClosing: accountSchema.entries.id
})


// Output
export const settleSheetReturn = v.object({})
