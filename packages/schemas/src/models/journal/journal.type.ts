import { journalInclude } from "./journal.include"
import { journalModel } from "./journal.model"


type journalInclude = keyof typeof journalInclude
type journalModel = typeof journalModel.$inferSelect

export type JournalReturned = Pick<journalModel, journalInclude>
