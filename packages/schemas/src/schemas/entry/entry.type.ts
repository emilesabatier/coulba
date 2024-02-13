import { entries } from "../../models"
import { entryInclude } from "./entry.include"


type entryInclude = keyof typeof entryInclude
type entries = typeof entries.$inferSelect

export type EntryReturned = Pick<entries, entryInclude>
