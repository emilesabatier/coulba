import * as v from "valibot"
import { textSchema } from "../../../components/schemas/text.schema.js"
import { organizationIncludeKeys } from "../../../schemas/organization/organization.include.js"
import { organizationSchema } from "../../../schemas/organization/organization.schema.js"


// Input
export const generateApiKeyBody = v.object({
    apiKey: textSchema
})


// Output
export const generateApiKeyReturn = v.pick(organizationSchema, organizationIncludeKeys)
