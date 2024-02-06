import { journalInclude } from "./journal.include.js"
import { journalModel } from "./journal.model.js"


type journalInclude = keyof typeof journalInclude
type journalModel = typeof journalModel.$inferSelect

export type JournalReturned = Pick<journalModel, journalInclude>
