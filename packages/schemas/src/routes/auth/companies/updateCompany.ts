import * as v from "valibot"
import { companySchema } from "../../../schemas/company/company.schema"


// Input
export const updateCompanyParams = v.object({
    idCompany: companySchema.entries.id
})

export const updateCompanyBody = v.partial(v.object({
    siren: companySchema.entries.siren,
    name: companySchema.entries.name
}))


// Output
export const updateCompanyReturn = companySchema
