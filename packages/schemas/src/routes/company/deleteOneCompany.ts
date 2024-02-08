import z from "zod"
import { companySchema } from "../../schemas/company/company.schema"


// Input
export const deleteOneCompanyParams = companySchema.pick({ id: true })
export type DeleteOneCompanyParams = z.infer<typeof deleteOneCompanyParams>


// Output
export const deleteOneCompanyReturn = companySchema.pick({ id: true })
export type DeleteOneCompanyReturn = z.infer<typeof deleteOneCompanyReturn>
