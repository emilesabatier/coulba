import { rows } from "../../models/rows.model"
import { rowInclude } from "./row.include"


type rowInclude = keyof typeof rowInclude
type rows = typeof rows.$inferSelect

export type RowReturned = Pick<rows, rowInclude>
