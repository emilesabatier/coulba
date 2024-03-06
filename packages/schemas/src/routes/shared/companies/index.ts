import { createOneCompanyBody, createOneCompanyReturn } from "./createOneCompany"


export const companies = {
    post: {
        body: createOneCompanyBody,
        return: createOneCompanyReturn
    }
}
