import { z } from "zod"
import { journalSchema } from "../../schemas/journal/journal.schema"


// Input
export const createOneJournalBody = z.object({
    acronym: journalSchema.shape.acronym,
    label: journalSchema.shape.label
})
export type CreateOneJournalBody = z.infer<typeof createOneJournalBody>


// Output
export const createOneJournalReturn = journalSchema.pick({ id: true })
export type CreateOneJournalReturn = z.infer<typeof createOneJournalReturn>
