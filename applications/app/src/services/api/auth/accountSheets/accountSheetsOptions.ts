import { queryOptions } from "@tanstack/react-query"
import { readAccountSheet } from "./readAccountSheet"
import { readAccountSheets } from "./readAccountSheets"


export const accountSheetsOptions = queryOptions({
    queryKey: ["accountSheets"],
    queryFn: readAccountSheets
})

export const accountSheetOptions = (idAccountSheet: string) => queryOptions({
    queryKey: ["accountSheets", idAccountSheet],
    queryFn: () => readAccountSheet({ params: { idAccountSheet: idAccountSheet } })
})
