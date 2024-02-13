import { companies } from "../../models"
import { companyInclude } from "./company.include"


type companyInclude = keyof typeof companyInclude
type companies = typeof companies.$inferSelect

export type CompanyReturned = Pick<companies, companyInclude>
