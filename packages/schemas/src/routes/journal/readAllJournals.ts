import * as v from "valibot"
import { readOneJournalReturn } from "./readOneJournal"


// Output
export const readAllJournalsReturn = v.array(readOneJournalReturn)
