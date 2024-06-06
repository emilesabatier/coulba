import { createOrganizationBody, createOrganizationReturn } from "./createOrganization.js"


export const organizations = {
    post: {
        body: createOrganizationBody,
        return: createOrganizationReturn
    }
}
