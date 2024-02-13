import { companySchema } from "schemas/company/company.schema"
import { companyInclude } from "./company.include"
import { companyWith } from "./company.with"
export type * from "./company.type"

export const company = {
    schema: companySchema,
    include: companyInclude,
    with: companyWith
}
