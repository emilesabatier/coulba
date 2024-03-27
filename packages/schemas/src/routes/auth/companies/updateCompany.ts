import * as v from "valibot"
import { companyIncludeKeys } from "../../../schemas/company/company.include"
import { companySchema } from "../../../schemas/company/company.schema"


// Input
export const updateCompanyBody = v.partial(v.object({
    // siren: companySchema.entries.siren,
    name: companySchema.entries.name,
    address: companySchema.entries.address,
    email: companySchema.entries.email
}))


// Output
export const updateCompanyReturn = v.pick(companySchema, companyIncludeKeys)
