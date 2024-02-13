import { journals } from "../../models"
import { journalInclude } from "./journal.include"


type journalInclude = keyof typeof journalInclude
type journals = typeof journals.$inferSelect

export type JournalReturned = Pick<journals, journalInclude>
