import { companySchema } from "schemas/company/company.schema"
import { companyInclude } from "./company.include"
export type * from "./company.type"

export const company = {
    schema: companySchema,
    include: companyInclude
}
