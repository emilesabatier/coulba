import { z } from "zod"
import { readOneYearReturn } from "./readOneYear"


// Output
export const readAllYearsReturn = readOneYearReturn.array()
export type ReadAllYearsReturn = z.infer<typeof readAllYearsReturn>
