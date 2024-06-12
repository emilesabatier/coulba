import * as v from "valibot"
import { journalSchema } from "../../../../schemas/journal/journal.schema"
import { accountSchema } from "../../../../schemas/account/account.schema"


// Input
export const openBody = v.object({
    idJournalOpening: journalSchema.entries.id,
    idAccountSheetOpening: accountSchema.entries.id
})


// Output
export const openReturn = v.object({})
