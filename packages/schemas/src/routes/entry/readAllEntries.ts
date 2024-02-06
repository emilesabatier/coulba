import { z } from "zod"
import { readOneEntryReturn } from "./readOneEntry.js"


// Output
export const readAllEntriesReturn = readOneEntryReturn.array()
export type ReadAllEntriesReturn = z.infer<typeof readAllEntriesReturn>
