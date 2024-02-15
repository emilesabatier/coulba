import * as v from "valibot"
import { readOneAccountReturn } from "./readOneAccount"


// Output
export const readAllAccountsReturn = v.array(readOneAccountReturn)
