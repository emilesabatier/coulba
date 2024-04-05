import { generateApiKeyBody, generateApiKeyReturn } from "./generateApiKey.js"
import { readCompanyReturn } from "./readCompany.js"
import { updateCompanyBody, updateCompanyReturn } from "./updateCompany.js"


export const companies = {
    get: {
        return: readCompanyReturn
    },
    put: {
        body: updateCompanyBody,
        return: updateCompanyReturn
    },
    patch: {
        generateApiKey: {
            body: generateApiKeyBody,
            return: generateApiKeyReturn
        }
    }
}
