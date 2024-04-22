import * as v from "valibot"
import { sheetSchema } from "../../../schemas/sheet/sheet.schema.js"


// Input
export const readSheetParams = v.object({
    idSheet: v.optional(sheetSchema.entries.id)
})

// Output
export const readSheetReturn = sheetSchema
