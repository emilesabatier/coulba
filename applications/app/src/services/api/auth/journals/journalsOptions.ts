import { queryOptions } from "@tanstack/react-query"
import { readJournal } from "./readJournal"
import { readJournals } from "./readJournals"


export const journalsOptions = queryOptions({
    queryKey: ["journals"],
    queryFn: readJournals
})

export const journalOptions = (idJournal: string) => queryOptions({
    queryKey: ["journals", idJournal],
    queryFn: () => readJournal({ params: { idJournal: idJournal } })
})
