import { z } from "zod"
import { readOneUserReturn } from "./readOneUser.js"


// Output
export const readAllUsersReturn = readOneUserReturn.array()
export type ReadAllUsersReturn = z.infer<typeof readAllUsersReturn>
