import * as v from "valibot"
import { readOneEntryReturn } from "./readOneEntry"


// Output
export const readAllEntriesReturn = v.array(readOneEntryReturn)
