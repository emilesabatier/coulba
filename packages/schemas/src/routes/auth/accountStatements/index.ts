import { createAccountStatementBody, createAccountStatementReturn } from "./createAccountStatement"
import { deleteAccountStatementParams, deleteAccountStatementReturn } from "./deleteAccountStatement"
import { readAccountStatementParams, readAccountStatementReturn } from "./readAccountStatement"
import { updateAccountStatementBody, updateAccountStatementParams, updateAccountStatementReturn } from "./updateAccountStatement"


export const accountStatements = {
    post: {
        body: createAccountStatementBody,
        return: createAccountStatementReturn
    },
    get: {
        params: readAccountStatementParams,
        return: readAccountStatementReturn
    },
    put: {
        params: updateAccountStatementParams,
        body: updateAccountStatementBody,
        return: updateAccountStatementReturn
    },
    delete: {
        params: deleteAccountStatementParams,
        return: deleteAccountStatementReturn
    }
}
