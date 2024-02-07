import z from "zod"
import { journalSchema } from "../../models/journal/journal.schema"


// Input
export const deleteOneJournalParams = journalSchema.pick({ id: true })
export type DeleteOneJournalParams = z.infer<typeof deleteOneJournalParams>


// Output
export const deleteOneJournalReturn = journalSchema.pick({ id: true })
export type DeleteOneJournalReturn = z.infer<typeof deleteOneJournalReturn>
