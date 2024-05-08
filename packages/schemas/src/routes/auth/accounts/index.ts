import { createAccountBody, createAccountReturn } from "./createAccount.js"
import { deleteAccountParams, deleteAccountReturn } from "./deleteAccount.js"
import { readAccountParams, readAccountReturn } from "./readAccount.js"
import { updateAccountBody, updateAccountParams, updateAccountReturn } from "./updateAccount.js"


export const accounts = {
    post: {
        body: createAccountBody,
        return: createAccountReturn
    },
    get: {
        params: readAccountParams,
        return: readAccountReturn
    },
    put: {
        params: updateAccountParams,
        body: updateAccountBody,
        return: updateAccountReturn
    },
    delete: {
        params: deleteAccountParams,
        return: deleteAccountReturn
    }
}
