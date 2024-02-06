import z from "zod"
import { companyInclude } from "../../models/company/company.include.js"
import { companySchema } from "../../models/company/company.schema.js"
import { userInclude } from "../../models/user/user.include.js"
import { userSchema } from "../../models/user/user.schema.js"


// Input
export const readOneCompanyParams = companySchema.pick({ id: true })
export type ReadOneCompanyParams = z.infer<typeof readOneCompanyParams>


// Output
export const readOneCompanyReturn = companySchema.pick(companyInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneCompanyReturn = z.infer<typeof readOneCompanyReturn>
