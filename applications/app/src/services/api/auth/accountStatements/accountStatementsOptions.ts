import { queryOptions } from "@tanstack/react-query"
import { readAccountStatement } from "./readAccountStatement"
import { readAccountStatements } from "./readAccountStatements"


export const accountStatementsOptions = queryOptions({
    queryKey: ["accountStatements"],
    queryFn: readAccountStatements
})

export const accountStatementOptions = (idAccountStatement: string) => queryOptions({
    queryKey: ["accountStatements", idAccountStatement],
    queryFn: () => readAccountStatement({ params: { idAccountStatement: idAccountStatement } })
})
