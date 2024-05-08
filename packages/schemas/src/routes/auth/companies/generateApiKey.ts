import * as v from "valibot"
import { textSchema } from "../../../components/schemas/text.schema.js"
import { companyIncludeKeys } from "../../../schemas/company/company.include.js"
import { companySchema } from "../../../schemas/company/company.schema.js"


// Input
export const generateApiKeyBody = v.object({
    apiKey: textSchema
})


// Output
export const generateApiKeyReturn = v.pick(companySchema, companyIncludeKeys)
