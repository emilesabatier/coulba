import { queryOptions } from "@tanstack/react-query"
import { readAccounts } from "./readAccounts"


export const accountOptions = queryOptions({
    queryKey: ["accounts"],
    queryFn: readAccounts
})
