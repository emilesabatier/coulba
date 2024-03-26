import * as v from "valibot"
import { companyIncludeKeys } from "../../../schemas/company/company.include"
import { companySchema } from "../../../schemas/company/company.schema"


// Output
export const readCompanyReturn = v.pick(companySchema, companyIncludeKeys)
