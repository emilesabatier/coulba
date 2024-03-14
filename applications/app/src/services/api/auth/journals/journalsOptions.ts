import { queryOptions } from "@tanstack/react-query"
import { readJournals } from "./readJournals"


export const journalOptions = queryOptions({
    queryKey: ["journals"],
    queryFn: readJournals
})
