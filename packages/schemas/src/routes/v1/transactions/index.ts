import { createTransactionBody, createTransactionReturn } from "./createTransaction"


export const transactions = {
    post: {
        body: createTransactionBody,
        return: createTransactionReturn
    }
}
