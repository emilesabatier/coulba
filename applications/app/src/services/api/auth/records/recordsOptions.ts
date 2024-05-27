import { queryOptions } from "@tanstack/react-query"
import { readRecord } from "./readRecord"
import { readRecords } from "./readRecords"


export const recordsOptions = queryOptions({
    queryKey: ["records"],
    queryFn: readRecords
})

export const recordOptions = (idRecord: string) => queryOptions({
    queryKey: ["records", idRecord],
    queryFn: () => readRecord({ params: { idRecord: idRecord } })
})
