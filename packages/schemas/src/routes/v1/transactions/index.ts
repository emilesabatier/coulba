import { createTransactionBody, createTransactionReturn } from "./createTransaction.js"


export const transactions = {
    post: {
        body: createTransactionBody,
        return: createTransactionReturn
    }
}
