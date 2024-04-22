import { createCompanyBody, createCompanyReturn } from "./createCompany.js"


export const companies = {
    post: {
        body: createCompanyBody,
        return: createCompanyReturn
    }
}
