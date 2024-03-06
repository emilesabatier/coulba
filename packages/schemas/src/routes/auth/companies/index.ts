import { readOneCompanyParams, readOneCompanyReturn } from "./readOneCompany"
import { updateOneCompanyBody, updateOneCompanyParams, updateOneCompanyReturn } from "./updateOneCompany"


export const companies = {
    get: {
        params: readOneCompanyParams,
        return: readOneCompanyReturn
    },
    put: {
        params: updateOneCompanyParams,
        body: updateOneCompanyBody,
        return: updateOneCompanyReturn
    }
}
