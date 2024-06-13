import * as v from "valibot"
import { journalSchema } from "../../../../schemas/journal/journal.schema"


// Input
export const openBody = v.object({
    idJournalOpening: journalSchema.entries.id
})


// Output
export const openReturn = v.object({})
