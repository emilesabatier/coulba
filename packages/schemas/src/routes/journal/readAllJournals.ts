import { z } from "zod"
import { readOneJournalReturn } from "./readOneJournal"


// Output
export const readAllJournalsReturn = readOneJournalReturn.array()
export type ReadAllJournalsReturn = z.infer<typeof readAllJournalsReturn>
