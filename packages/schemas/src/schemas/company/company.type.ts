import { companies } from "../../models/index.js"
import { companyInclude } from "./company.include.js"


type companyInclude = keyof typeof companyInclude
type companies = typeof companies.$inferSelect

export type CompanyReturned = Pick<companies, companyInclude>
