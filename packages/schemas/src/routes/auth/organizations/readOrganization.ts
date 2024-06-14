import * as v from "valibot"
import { organizationIncludeKeys } from "../../../schemas/organization/organization.include.js"
import { organizationSchema } from "../../../schemas/organization/organization.schema.js"


// Output
export const readOrganizationReturn = v.pick(organizationSchema, organizationIncludeKeys)
