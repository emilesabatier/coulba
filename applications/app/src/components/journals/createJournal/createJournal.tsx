import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createJournal } from "../../../services/api/auth/journals/createJournal"
import { journalOptions } from "../../../services/api/auth/journals/journalsOptions"
import { Create } from "../../layouts/actions/create"
import { CreateJournalForm } from "./createJournal.form"



type CreateJournal = {
    children: ReactElement
}

export function CreateJournal(props: CreateJournal) {

    const mutation = useMutation({
        mutationKey: journalOptions.queryKey,
        mutationFn: createJournal
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un journal"
            submitLabel="Ajouter"
            defaultValues={{}}
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(journalOptions.queryKey, (_data) => _data && data && [data, ..._data])
                        toast({ title: "Nouveau journal ajouté", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.journals.post.body}
            children={<CreateJournalForm />}
        />
    )
}
