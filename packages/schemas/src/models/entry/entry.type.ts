import { entryInclude } from "./entry.include"
import { entryModel } from "./entry.model"


type entryInclude = keyof typeof entryInclude
type entryModel = typeof entryModel.$inferSelect

export type EntryReturned = Pick<entryModel, entryInclude>
