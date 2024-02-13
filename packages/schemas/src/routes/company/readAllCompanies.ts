import * as v from "valibot"
import { readOneCompanyReturn } from "./readOneCompany"


// Output
export const readAllCompaniesReturn = v.array(readOneCompanyReturn)
