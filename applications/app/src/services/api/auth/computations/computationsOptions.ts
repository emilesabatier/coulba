import { queryOptions } from "@tanstack/react-query"
import { readComputation } from "./readComputation"
import { readComputations } from "./readComputations"


export const computationsOptions = queryOptions({
    queryKey: ["computations"],
    queryFn: readComputations
})

export const computationOptions = (idComputation: string) => queryOptions({
    queryKey: ["computations", idComputation],
    queryFn: () => readComputation({ params: { idComputation: idComputation } })
})
