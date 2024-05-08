import * as v from "valibot"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema.js"
import { sheetSchema } from "../../../schemas/sheet/sheet.schema.js"


// Input
export const updateSheetParams = v.object({
    idSheet: sheetSchema.entries.id
})

export const updateSheetBody = v.partial(v.object({
    idParent: sheetSchema.entries.idParent,
    side: sheetSchema.entries.side,
    number: sheetSchema.entries.number,
    label: sheetSchema.entries.label,
    accountSheets: v.array(v.object({
        idAccount: accountSheetSchema.entries.idAccount,
        flow: accountSheetSchema.entries.flow,
        isAllowance: accountSheetSchema.entries.isAllowance
    }))
}))


// Output
export const updateSheetReturn = sheetSchema
