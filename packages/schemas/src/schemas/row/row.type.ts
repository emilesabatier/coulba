import { rows } from "../../models/rows.model.js"
import { rowInclude } from "./row.include.js"


type rowInclude = keyof typeof rowInclude
type rows = typeof rows.$inferSelect

export type RowReturned = Pick<rows, rowInclude>
