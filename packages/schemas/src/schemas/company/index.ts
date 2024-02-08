import { companyInclude } from "./company.include"
import { companyWith } from "./company.with"
export type * from "./company.type"

export const company = {
    include: companyInclude,
    with: companyWith
}
