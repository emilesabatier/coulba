import { sheets } from "../../models/index.js"
import { sheetInclude } from "./sheet.include.js"


type sheetInclude = keyof typeof sheetInclude
type sheets = typeof sheets.$inferSelect

export type SheetReturned = Pick<sheets, sheetInclude>
