import { companyInclude } from "./company.include.js"
import { companyModel } from "./company.model.js"


type companyInclude = keyof typeof companyInclude
type companyModel = typeof companyModel.$inferSelect

export type CompanyReturned = Pick<companyModel, companyInclude>
