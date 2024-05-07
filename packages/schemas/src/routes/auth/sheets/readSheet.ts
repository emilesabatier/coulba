import * as v from "valibot"
import { accountSheetSchema } from "../../../schemas/accountSheet/accountSheet.schema.js"
import { sheetSchema } from "../../../schemas/sheet/sheet.schema.js"


// Input
export const readSheetParams = v.object({
    idSheet: v.optional(sheetSchema.entries.id)
})

// Output
export const readSheetReturn = v.merge([
    sheetSchema,
    v.object({
        accountSheets: v.array(accountSheetSchema)
    })
])
