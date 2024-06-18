import { createAccountStatementBody, createAccountStatementReturn } from "./createAccountStatement.js"
import { deleteAccountStatementParams, deleteAccountStatementReturn } from "./deleteAccountStatement.js"
import { readAccountStatementParams, readAccountStatementReturn } from "./readAccountStatement.js"
import { updateAccountStatementBody, updateAccountStatementParams, updateAccountStatementReturn } from "./updateAccountStatement.js"


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
