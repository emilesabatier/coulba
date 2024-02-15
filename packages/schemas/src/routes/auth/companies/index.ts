import { readOneCompanyParams, readOneCompanyReturn } from "./readOneCompany"
import { updateOneCompanyBody, updateOneCompanyParams, updateOneCompanyReturn } from "./updateOneCompany"


export const companies = {
    read: {
        params: readOneCompanyParams,
        return: readOneCompanyReturn
    },
    update: {
        params: updateOneCompanyParams,
        body: updateOneCompanyBody,
        return: updateOneCompanyReturn
    }
}
