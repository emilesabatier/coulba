import { queryOptions } from "@tanstack/react-query"
import { readYear } from "./readYear"
import { readYears } from "./readYears"


export const yearsOptions = queryOptions({
    queryKey: ["years"],
    queryFn: readYears
})


export const yearOptions = (idYear: string) => queryOptions({
    queryKey: ["years", idYear],
    queryFn: () => readYear({ params: { idYear: idYear } })
})
