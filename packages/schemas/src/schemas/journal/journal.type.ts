import { journals } from "../../models/index.js"
import { journalInclude } from "./journal.include.js"


type journalInclude = keyof typeof journalInclude
type journals = typeof journals.$inferSelect

export type JournalReturned = Pick<journals, journalInclude>
