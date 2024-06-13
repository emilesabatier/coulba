import * as v from "valibot"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const settleSheetBody = v.object({
    idJournalClosing: journalSchema.entries.id
})


// Output
export const settleSheetReturn = v.object({})
