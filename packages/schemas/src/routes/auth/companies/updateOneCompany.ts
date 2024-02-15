import * as v from "valibot"
import { companySchema } from "../../../schemas/company/company.schema"


// Input
export const updateOneCompanyParams = v.object({
    idCompany: companySchema.entries.id
})

export const updateOneCompanyBody = v.partial(v.object({
    idYear: companySchema.entries.idYear,
    siren: companySchema.entries.siren,
    name: companySchema.entries.name
}))


// Output
export const updateOneCompanyReturn = companySchema
