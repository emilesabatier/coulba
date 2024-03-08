import { createTransactionBody, createTransactionReturn } from "./createTransaction"
import { deleteTransactionParams, deleteTransactionReturn } from "./deleteTransaction"
import { readTransactionParams, readTransactionReturn } from "./readTransaction"
import { updateTransactionBody, updateTransactionParams, updateTransactionReturn } from "./updateTransaction"
import { validateTransactionParams, validateTransactionReturn } from "./validateTransaction"


export const transactions = {
    post: {
        body: createTransactionBody,
        return: createTransactionReturn
    },
    get: {
        params: readTransactionParams,
        return: readTransactionReturn
    },
    put: {
        params: updateTransactionParams,
        body: updateTransactionBody,
        return: updateTransactionReturn
    },
    delete: {
        params: deleteTransactionParams,
        return: deleteTransactionReturn
    },
    patch: {
        validate: {
            params: validateTransactionParams,
            return: validateTransactionReturn
        }
    }
}
