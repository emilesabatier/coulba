import * as v from "valibot"
import { journalSchema } from "../../schemas/journal/journal.schema"


// Input
export const createOneJournalBody = v.object({
    acronym: journalSchema.entries.acronym,
    label: journalSchema.entries.label
})


// Output
export const createOneJournalReturn = journalSchema
