import { organizations } from "../../models/index.js"
import { organizationInclude } from "./organization.include.js"


type organizationInclude = keyof typeof organizationInclude
type organizations = typeof organizations.$inferSelect

export type OrganizationReturned = Pick<organizations, organizationInclude>
