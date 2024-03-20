import { queryOptions } from "@tanstack/react-query"
import { readYears } from "./readYears"
import { readYear } from "./readYear"


export const yearsOptions = queryOptions({
    queryKey: ["years"],
    queryFn: readYears
})


export const yearOptions = (idYear: string) => queryOptions({
    queryKey: ["transactions", idYear],
    queryFn: () => readYear({ params: { idYear: idYear } })
})
