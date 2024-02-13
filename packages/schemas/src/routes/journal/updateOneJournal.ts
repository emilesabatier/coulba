import * as v from "valibot"
import { journalSchema } from "../../schemas/journal/journal.schema"


// Input
export const updateOneJournalParams = v.object({
    idJournal: journalSchema.entries.id
})

export const updateOneJournalBody = v.partial(v.object({
    acronym: journalSchema.entries.acronym,
    label: journalSchema.entries.label
}))

// Output
export const updateOneJournalReturn = journalSchema
