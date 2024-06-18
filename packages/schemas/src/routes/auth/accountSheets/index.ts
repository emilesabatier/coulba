import { createAccountStatementBody, createAccountStatementReturn } from "./createAccountSheet.js"
import { deleteAccountStatementParams, deleteAccountStatementReturn } from "./deleteAccountSheet.js"
import { readAccountStatementParams, readAccountStatementReturn } from "./readAccountSheet.js"
import { updateAccountStatementBody, updateAccountStatementParams, updateAccountStatementReturn } from "./updateAccountSheet.js"


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
