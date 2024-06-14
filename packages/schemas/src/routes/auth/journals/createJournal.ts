import * as v from "valibot"
import { journalSchema } from "../../../schemas/journal/journal.schema.js"


// Input
export const createJournalBody = v.object({
    code: journalSchema.entries.code,
    label: journalSchema.entries.label
})


// Output
export const createJournalReturn = journalSchema
