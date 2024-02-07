import { companyInclude } from "./company.include"
import { companyModel } from "./company.model"
import { companyWith } from "./company.with"


export * as companyModel from "./company.model"
export type * from "./company.type"

export const company = {
    model: companyModel,
    include: companyInclude,
    with: companyWith
}
