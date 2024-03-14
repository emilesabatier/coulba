import { createAccountBody, createAccountReturn } from "./createAccount"
import { deleteAccountParams, deleteAccountReturn } from "./deleteAccount"
import { readAccountParams, readAccountReturn } from "./readAccount"
import { updateAccountBody, updateAccountParams, updateAccountReturn } from "./updateAccount"


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
