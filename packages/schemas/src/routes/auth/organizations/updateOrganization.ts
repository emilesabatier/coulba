import * as v from "valibot"
import { organizationIncludeKeys } from "../../../schemas/organization/organization.include.js"
import { organizationSchema } from "../../../schemas/organization/organization.schema.js"


// Input
export const updateOrganizationBody = v.partial(v.object({
    siren: organizationSchema.entries.siren,
    name: organizationSchema.entries.name,
    email: organizationSchema.entries.email
}))


// Output
export const updateOrganizationReturn = v.pick(organizationSchema, organizationIncludeKeys)
