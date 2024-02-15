import * as v from "valibot"
import { companySchema } from "../../../schemas/company/company.schema"


// Input
export const createOneCompanyBody = v.object({
    idYear: companySchema.entries.idYear,
    siren: companySchema.entries.siren,
    name: companySchema.entries.name
})


// Output
export const createOneCompanyReturn = companySchema
