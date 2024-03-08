import { queryOptions } from "@tanstack/react-query"
import { readTransactions } from "./readTransactions"


export const transactionOptions = queryOptions({
    queryKey: ["transactions"],
    queryFn: readTransactions
})
