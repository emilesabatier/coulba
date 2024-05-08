import * as v from "valibot"
import { sheetSchema } from "../../../schemas/sheet/sheet.schema.js"


// Input
export const deleteSheetParams = v.object({
    idSheet: sheetSchema.entries.id
})


// Output
export const deleteSheetReturn = sheetSchema
