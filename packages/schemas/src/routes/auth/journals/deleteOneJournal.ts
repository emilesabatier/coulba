import * as v from "valibot"
import { journalSchema } from "../../../schemas/journal/journal.schema"


// Input
export const deleteOneJournalParams = v.object({
    idJournal: journalSchema.entries.id
})

// Output
export const deleteOneJournalReturn = journalSchema
