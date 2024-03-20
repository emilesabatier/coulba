import { queryOptions } from "@tanstack/react-query"
import { readJournals } from "./readJournals"
import { readJournal } from "./readJournal"


export const journalsOptions = queryOptions({
    queryKey: ["journals"],
    queryFn: readJournals
})

export const journalOptions = (idJournal: string) => queryOptions({
    queryKey: ["transactions", idJournal],
    queryFn: () => readJournal({ params: { idJournal: idJournal } })
})
