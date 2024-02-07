import z from "zod"
import { companySchema } from "../../models/company/company.schema"


// Input
export const updateOneCompanyParams = companySchema.pick({ id: true })
export type UpdateOneCompanyParams = z.infer<typeof updateOneCompanyParams>

export const updateOneCompanyBody = z.object({
    siren: companySchema.shape.siren,
    name: companySchema.shape.name
}).partial()
export type UpdateOneCompanyBody = z.infer<typeof updateOneCompanyBody>


// Output
export const updateOneCompanyReturn = companySchema.pick({ id: true })
export type UpdateOneCompanyReturn = z.infer<typeof updateOneCompanyReturn>
