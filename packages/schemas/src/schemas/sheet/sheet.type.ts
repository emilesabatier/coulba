import { sheets } from "../../models"
import { sheetInclude } from "./sheet.include"


type sheetInclude = keyof typeof sheetInclude
type sheets = typeof sheets.$inferSelect

export type SheetReturned = Pick<sheets, sheetInclude>
