import * as v from "valibot"
import { readOneUserReturn } from "./readOneUser"


// Output
export const readAllUsersReturn = v.array(readOneUserReturn)
