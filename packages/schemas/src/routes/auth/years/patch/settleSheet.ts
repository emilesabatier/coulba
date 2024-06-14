import * as v from "valibot"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const settleSheetBody = v.object({
    idJournalClosing: v.nonNullish(journalSchema.entries.id, "Le journal doit être renseigné")
})


// Output
export const settleSheetReturn = v.object({})
