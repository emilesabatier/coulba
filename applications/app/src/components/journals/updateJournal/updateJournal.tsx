import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { journalOptions } from "../../../services/api/auth/journals/journalsOptions"
import { updateJournal } from "../../../services/api/auth/journals/updateJournal"
import { Update } from "../../layouts/actions/update"
import { UpdateJournalForm } from "./updateJournal.form"


type UpdateJournal = {
    journal: v.Output<typeof auth.journals.get.return>
    children: ReactElement
}

export function UpdateJournal(props: UpdateJournal) {

    const mutation = useMutation({
        mutationKey: journalOptions.queryKey,
        mutationFn: updateJournal
    })

    return (
        <Update
            triggerElement={props.children}
            title="Modifier le journal"
            submitLabel="Modifier"
            defaultValues={props.journal}
            onSubmit={async (data) => {
                mutation.mutate({ params: { idJournal: props.journal.id }, body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(journalOptions.queryKey, (_data) => _data && data && [data, ..._data.filter((journal) => journal.id !== data.id)])
                        toast({ title: "Journal mis à jour", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.journals.put.body}
            children={<UpdateJournalForm />}
        />
    )
}
