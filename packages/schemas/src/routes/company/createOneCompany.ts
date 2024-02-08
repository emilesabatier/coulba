import { z } from "zod"
import { companySchema } from "../../schemas/company/company.schema"


// Input
export const createOneCompanyBody = z.object({
    siren: companySchema.shape.siren,
    name: companySchema.shape.name
})
export type CreateOneCompanyBody = z.infer<typeof createOneCompanyBody>


// Output
export const createOneCompanyReturn = companySchema.pick({ id: true })
export type CreateOneCompanyReturn = z.infer<typeof createOneCompanyReturn>
