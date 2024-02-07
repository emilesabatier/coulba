import { z } from "zod"
import { readOneCompanyReturn } from "./readOneCompany"


// Output
export const readAllCompaniesReturn = readOneCompanyReturn.array()
export type ReadAllCompaniesReturn = z.infer<typeof readAllCompaniesReturn>
