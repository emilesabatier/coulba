import { z } from "zod"
import { readOneCompanyReturn } from "./readOneCompany.js"


// Output
export const readAllCompaniesReturn = readOneCompanyReturn.array()
export type ReadAllCompaniesReturn = z.infer<typeof readAllCompaniesReturn>
