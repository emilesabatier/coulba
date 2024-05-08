import { createTransactionBody, createTransactionReturn } from "./createTransaction.js"
import { deleteTransactionParams, deleteTransactionReturn } from "./deleteTransaction.js"
import { readTransactionParams, readTransactionReturn } from "./readTransaction.js"
import { updateTransactionBody, updateTransactionParams, updateTransactionReturn } from "./updateTransaction.js"
import { validateTransactionParams, validateTransactionReturn } from "./validateTransaction.js"


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
