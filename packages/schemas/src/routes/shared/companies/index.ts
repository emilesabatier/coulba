import { createCompanyBody, createCompanyReturn } from "./createCompany"


export const companies = {
    post: {
        body: createCompanyBody,
        return: createCompanyReturn
    }
}
