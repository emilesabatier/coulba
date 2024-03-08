import * as v from "valibot"
import { companySchema } from "../../../schemas/company/company.schema"


// Input
export const createCompanyBody = v.object({
    siren: companySchema.entries.siren,
    name: companySchema.entries.name
})


// Output
export const createCompanyReturn = companySchema
