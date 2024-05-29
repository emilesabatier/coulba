import { createAccountStatementBody, createAccountStatementReturn } from "./createAccountSheet"
import { deleteAccountStatementParams, deleteAccountStatementReturn } from "./deleteAccountSheet"
import { readAccountStatementParams, readAccountStatementReturn } from "./readAccountSheet"
import { updateAccountStatementBody, updateAccountStatementParams, updateAccountStatementReturn } from "./updateAccountSheet"


export const accountSheets = {
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
