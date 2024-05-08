import { accountSheets } from "../../models/accountSheets.model"
import { accountSheetInclude } from "./accountSheet.include"


type accountSheetInclude = keyof typeof accountSheetInclude
type accountSheets = typeof accountSheets.$inferSelect

export type accountSheetReturned = Pick<accountSheets, accountSheetInclude>
