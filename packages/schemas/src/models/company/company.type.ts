import { companyInclude } from "./company.include"
import { companyModel } from "./company.model"


type companyInclude = keyof typeof companyInclude
type companyModel = typeof companyModel.$inferSelect

export type CompanyReturned = Pick<companyModel, companyInclude>
