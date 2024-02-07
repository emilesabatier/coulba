import z from "zod"
import { journalSchema } from "../../models/journal/journal.schema"


// Input
export const updateOneJournalParams = journalSchema.pick({ id: true })
export type UpdateOneJournalParams = z.infer<typeof updateOneJournalParams>

export const updateOneJournalBody = z.object({
    acronym: journalSchema.shape.acronym,
    label: journalSchema.shape.label
}).partial()
export type UpdateOneJournalBody = z.infer<typeof updateOneJournalBody>


// Output
export const updateOneJournalReturn = journalSchema.pick({ id: true })
export type UpdateOneJournalReturn = z.infer<typeof updateOneJournalReturn>
