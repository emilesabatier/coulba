import { queryOptions } from "@tanstack/react-query"
import { readRecords } from "./readRecords"


export const recordsOptions = queryOptions({
    queryKey: ["records"],
    queryFn: readRecords
})
