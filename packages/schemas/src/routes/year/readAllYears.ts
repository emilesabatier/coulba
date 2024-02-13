import * as v from "valibot"
import { readOneYearReturn } from "./readOneYear"


// Output
export const readAllYearsReturn = v.array(readOneYearReturn)
