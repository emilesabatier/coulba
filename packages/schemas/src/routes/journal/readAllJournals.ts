import { z } from "zod"
import { readOneJournalReturn } from "./readOneJournal.js"


// Output
export const readAllJournalsReturn = readOneJournalReturn.array()
export type ReadAllJournalsReturn = z.infer<typeof readAllJournalsReturn>
