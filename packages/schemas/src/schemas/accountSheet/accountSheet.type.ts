import { accountSheets } from "../../models/accountSheets.model.js"
import { accountSheetInclude } from "./accountSheet.include.js"


type accountSheetInclude = keyof typeof accountSheetInclude
type accountSheets = typeof accountSheets.$inferSelect

export type accountSheetReturned = Pick<accountSheets, accountSheetInclude>
