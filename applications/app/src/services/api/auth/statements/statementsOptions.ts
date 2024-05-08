import { queryOptions } from "@tanstack/react-query"
import { readStatement } from "./readStatement"
import { readStatements } from "./readStatements"


export const statementsOptions = queryOptions({
    queryKey: ["statements"],
    queryFn: readStatements
})

export const statementOptions = (idStatement: string) => queryOptions({
    queryKey: ["statements", idStatement],
    queryFn: () => readStatement({ params: { idStatement: idStatement } })
})
