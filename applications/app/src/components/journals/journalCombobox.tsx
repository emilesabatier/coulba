import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readJournals } from "../../services/api/auth/journals/readJournals"
import { formatJournal } from "./format/formatJournal"


type JournalCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.journals.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function JournalCombobox(props: JournalCombobox) {
    const journals = useQuery({
        queryKey: ["journals"],
        queryFn: readJournals
    })

    const options = (journals.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatJournal(x)
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Choisir le journal"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
            isLoading={journals.isLoading}
        />
    )
}
