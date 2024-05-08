import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { journalOptions } from "../../../services/api/auth/journals/journalsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { formatJournal } from "./formatJournal"


type FormatJournalWithFetch = {
    idJournal: v.Output<typeof auth.journals.get.return>["id"]
}

export function FormatJournalWithFetch(props: FormatJournalWithFetch) {
    const journal = useQuery(journalOptions(props.idJournal))

    if (journal.isLoading) return (<CircularLoader />)
    if (journal.isError) return <ErrorMessage message={journal.error.message} />
    if (!journal.data) return <FormatNull />
    return <FormatText text={formatJournal(journal.data)} />
}
