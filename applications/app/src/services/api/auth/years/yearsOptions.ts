import { queryOptions } from "@tanstack/react-query"
import { readYears } from "./readYears"


export const yearOptions = queryOptions({
    queryKey: ["years"],
    queryFn: readYears
})
