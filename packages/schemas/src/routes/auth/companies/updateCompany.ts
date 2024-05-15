import * as v from "valibot"
import { companyIncludeKeys } from "../../../schemas/company/company.include.js"
import { companySchema } from "../../../schemas/company/company.schema.js"


// Input
export const updateCompanyBody = v.partial(v.object({
    siren: companySchema.entries.siren,
    name: companySchema.entries.name,
    email: companySchema.entries.email
}))


// Output
export const updateCompanyReturn = v.pick(companySchema, companyIncludeKeys)
