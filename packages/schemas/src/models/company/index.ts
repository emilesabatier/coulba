import { companyInclude } from "./company.include.js"
import { companyModel } from "./company.model.js"
import { companyWith } from "./company.with.js"


export * as companyModel from "./company.model.js"
export type * from "./company.type.js"

export const company = {
    model: companyModel,
    include: companyInclude,
    with: companyWith
}
