import { readCompanyReturn } from "./readCompany"
import { updateCompanyBody, updateCompanyParams, updateCompanyReturn } from "./updateCompany"


export const companies = {
    get: {
        return: readCompanyReturn
    },
    put: {
        params: updateCompanyParams,
        body: updateCompanyBody,
        return: updateCompanyReturn
    }
}
