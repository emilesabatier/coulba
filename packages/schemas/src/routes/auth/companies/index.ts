import { readCompanyReturn } from "./readCompany"
import { updateCompanyBody, updateCompanyReturn } from "./updateCompany"


export const companies = {
    get: {
        return: readCompanyReturn
    },
    put: {
        body: updateCompanyBody,
        return: updateCompanyReturn
    }
}
