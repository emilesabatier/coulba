import { queryOptions } from "@tanstack/react-query"
import { readTransaction } from "./readTransaction"
import { readTransactions } from "./readTransactions"


export const transactionsOptions = queryOptions({
    queryKey: ["transactions"],
    queryFn: readTransactions
})

export const transactionOptions = (idTransaction: string) => queryOptions({
    queryKey: ["transactions", idTransaction],
    queryFn: () => readTransaction({ params: { idTransaction: idTransaction } })
})
