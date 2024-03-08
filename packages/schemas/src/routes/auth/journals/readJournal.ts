import * as v from "valibot"
import { journalSchema } from "../../../schemas/journal/journal.schema"


// Input
export const readJournalParams = v.object({
    idJournal: v.optional(journalSchema.entries.id)
})

// Output
export const readJournalReturn = journalSchema
