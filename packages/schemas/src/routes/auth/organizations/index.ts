import { generateApiKeyBody, generateApiKeyReturn } from "./generateApiKey.js"
import { readOrganizationReturn } from "./readOrganization.js"
import { updateOrganizationBody, updateOrganizationReturn } from "./updateOrganization.js"


export const organizations = {
    get: {
        return: readOrganizationReturn
    },
    put: {
        body: updateOrganizationBody,
        return: updateOrganizationReturn
    },
    patch: {
        generateApiKey: {
            body: generateApiKeyBody,
            return: generateApiKeyReturn
        }
    }
}
