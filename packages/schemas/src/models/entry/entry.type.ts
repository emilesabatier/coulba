import { entryInclude } from "./entry.include.js"
import { entryModel } from "./entry.model.js"


type entryInclude = keyof typeof entryInclude
type entryModel = typeof entryModel.$inferSelect

export type EntryReturned = Pick<entryModel, entryInclude>
