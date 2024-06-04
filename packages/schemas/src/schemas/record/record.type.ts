import { records } from "../../models"
import { recordInclude } from "./record.include"


type recordInclude = keyof typeof recordInclude
type records = typeof records.$inferSelect

export type RecordReturned = Pick<records, recordInclude>
