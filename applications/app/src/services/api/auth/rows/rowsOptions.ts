import { queryOptions } from "@tanstack/react-query"
import { readRow } from "./readRow"
import { readRows } from "./readRows"


export const rowsOptions = queryOptions({
    queryKey: ["rows"],
    queryFn: readRows
})

export const rowOptions = (idRow: string) => queryOptions({
    queryKey: ["rows", idRow],
    queryFn: () => readRow({ params: { idRow: idRow } })
})
