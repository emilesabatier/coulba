import * as v from "valibot"
import { companySchema } from "../../../schemas/company/company.schema"
import { userKeys } from "../../../schemas/user/user.include"
import { userSchema } from "../../../schemas/user/user.schema"


// Input
export const readOneCompanyParams = v.object({
    idCompany: v.optional(companySchema.entries.id)
})


// Output
export const readOneCompanyReturn = v.merge([
    companySchema,
    v.object({
        lastUpdatedByUser: v.nullable(v.pick(userSchema, userKeys)),
        createdByUser: v.nullable(v.pick(userSchema, userKeys)),
    })
])
