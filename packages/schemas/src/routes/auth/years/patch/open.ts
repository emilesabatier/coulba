import * as v from "valibot"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const openBody = v.object({
    idJournalOpening: v.nonNullish(journalSchema.entries.id, "Le journal doit être renseigné")
})


// Output
export const openReturn = v.object({})
