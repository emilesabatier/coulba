import z from "zod"
import { companyInclude } from "../../schemas/company/company.include"
import { companySchema } from "../../schemas/company/company.schema"
import { userInclude } from "../../schemas/user/user.include"
import { userSchema } from "../../schemas/user/user.schema"


// Input
export const readOneCompanyParams = companySchema.pick({ id: true })
export type ReadOneCompanyParams = z.infer<typeof readOneCompanyParams>


// Output
export const readOneCompanyReturn = companySchema.pick(companyInclude).merge(z.object({
    lastUpdatedByUser: userSchema.pick(userInclude).nullable(),
    createdByUser: userSchema.pick(userInclude).nullable(),
}))
export type ReadOneCompanyReturn = z.infer<typeof readOneCompanyReturn>
