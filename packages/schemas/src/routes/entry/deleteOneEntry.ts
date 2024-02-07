import z from "zod"
import { entrySchema } from "../../models/entry/entry.schema"


// Input
export const deleteOneEntryParams = entrySchema.pick({ id: true })
export type DeleteOneEntryParams = z.infer<typeof deleteOneEntryParams>


// Output
export const deleteOneEntryReturn = entrySchema.pick({ id: true })
export type DeleteOneEntryReturn = z.infer<typeof deleteOneEntryReturn>
