import * as v from "valibot"
import { sheetSchema } from "../../../schemas/sheet/sheet.schema.js"


// Input
export const updateSheetParams = v.object({
    idSheet: sheetSchema.entries.id
})

export const updateSheetBody = v.partial(v.object({
    idSheetParent: sheetSchema.entries.idSheetParent,
    side: sheetSchema.entries.side,
    number: sheetSchema.entries.number,
    label: sheetSchema.entries.label
}))


// Output
export const updateSheetReturn = sheetSchema
