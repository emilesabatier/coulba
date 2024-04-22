import * as v from "valibot"
import { companyIncludeKeys } from "../../../schemas/company/company.include.js"
import { companySchema } from "../../../schemas/company/company.schema.js"


// Output
export const readCompanyReturn = v.pick(companySchema, companyIncludeKeys)
