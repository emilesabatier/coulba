import * as v from "valibot"
import { textSchema } from "../../../components/schemas/text.schema"
import { companyIncludeKeys } from "../../../schemas/company/company.include"
import { companySchema } from "../../../schemas/company/company.schema"


// Input
export const generateApiKeyBody = v.object({
    apiKey: textSchema
})


// Output
export const generateApiKeyReturn = v.pick(companySchema, companyIncludeKeys)
