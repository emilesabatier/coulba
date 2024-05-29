import { queryOptions } from "@tanstack/react-query"
import { readComputationStatement } from "./readComputationStatement"
import { readComputationStatements } from "./readComputationStatements"


export const computationStatementsOptions = queryOptions({
    queryKey: ["computationStatements"],
    queryFn: readComputationStatements
})

export const computationStatementOptions = (idComputationStatement: string) => queryOptions({
    queryKey: ["computationStatements", idComputationStatement],
    queryFn: () => readComputationStatement({ params: { idComputationStatement: idComputationStatement } })
})
