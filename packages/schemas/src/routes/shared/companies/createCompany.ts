import * as v from "valibot"
import { passwordSchema } from "../../../components/schemas/password.schema.js"
import { companySchema } from "../../../schemas/company/company.schema.js"
import { userSchema } from "../../../schemas/user/user.schema.js"


// Input
export const createCompanyBody = v.object({
    siren: companySchema.entries.siren,
    name: companySchema.entries.name,
    address: companySchema.entries.address,
    email: companySchema.entries.email,
    user: v.object({
        surname: userSchema.entries.surname,
        forename: userSchema.entries.forename,
        email: userSchema.entries.email,
        password: passwordSchema,
        passwordCheck: passwordSchema
    })
})


// Output
export const createCompanyReturn = companySchema
