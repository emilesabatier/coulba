import { queryOptions } from "@tanstack/react-query"
import { readAccount } from "./readAccount"
import { readAccounts } from "./readAccounts"


export const accountsOptions = queryOptions({
    queryKey: ["accounts"],
    queryFn: readAccounts
})

export const accountOptions = (idAccount: string) => queryOptions({
    queryKey: ["accounts", idAccount],
    queryFn: () => readAccount({ params: { idAccount: idAccount } })
})
