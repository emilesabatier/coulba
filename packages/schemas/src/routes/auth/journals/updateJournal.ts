import * as v from "valibot"
import { journalSchema } from "../../../schemas/journal/journal.schema.js"


// Input
export const updateJournalParams = v.object({
    idJournal: journalSchema.entries.id
})

export const updateJournalBody = v.partial(v.object({
    code: journalSchema.entries.code,
    label: journalSchema.entries.label
}))

// Output
export const updateJournalReturn = journalSchema
