import * as v from "valibot"
import { companySchema } from "../../schemas/company/company.schema"


// Input
export const deleteOneCompanyParams = v.object({
    idCompany: companySchema.entries.id
})


// Output
export const deleteOneCompanyReturn = companySchema
