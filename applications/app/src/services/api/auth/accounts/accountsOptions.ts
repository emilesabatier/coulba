import { queryOptions } from "@tanstack/react-query"
import { readAccounts } from "./readAccounts"
import { readAccount } from "./readAccount"


export const accountsOptions = queryOptions({
    queryKey: ["accounts"],
    queryFn: readAccounts
})

export const accountOptions = (idAccount: string) => queryOptions({
    queryKey: ["transactions", idAccount],
    queryFn: () => readAccount({ params: { idAccount: idAccount } })
})
