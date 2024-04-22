import { queryOptions } from "@tanstack/react-query"
import { readSheet } from "./readSheet"
import { readSheets } from "./readSheets"


export const sheetsOptions = queryOptions({
    queryKey: ["sheets"],
    queryFn: readSheets
})

export const sheetOptions = (idSheet: string) => queryOptions({
    queryKey: ["sheets", idSheet],
    queryFn: () => readSheet({ params: { idSheet: idSheet } })
})
