import * as v from "valibot"
import { sheetSchema } from "../../../schemas/sheet/sheet.schema.js"


// Input
export const createSheetBody = v.object({
    idSheetParent: v.optional(sheetSchema.entries.idSheetParent),
    side: sheetSchema.entries.side,
    number: sheetSchema.entries.number,
    label: sheetSchema.entries.label
})


// Output
export const createSheetReturn = sheetSchema
