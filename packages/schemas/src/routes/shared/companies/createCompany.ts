import * as v from "valibot"
import { companySchema } from "../../../schemas/company/company.schema"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const createCompanyBody = v.object({
    siren: companySchema.entries.siren,
    email: companySchema.entries.email,
    user: v.object({
        surname: userSchema.entries.surname,
        forename: userSchema.entries.forename,
        email: userSchema.entries.email
    })
})


// Output
export const createCompanyReturn = companySchema
