import { records } from "../../models/records.model.js"
import { recordInclude } from "./record.include.js"


type recordInclude = keyof typeof recordInclude
type records = typeof records.$inferSelect

export type RecordReturned = Pick<records, recordInclude>
