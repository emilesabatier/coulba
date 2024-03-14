import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { deleteJournal } from "../../../services/api/auth/journals/deleteJournal"
import { journalOptions } from "../../../services/api/auth/journals/journalsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteJournal = {
    journal: v.Output<typeof auth.journals.get.return>
    children: ReactElement
}

export function DeleteJournal(props: DeleteJournal) {

    const mutation = useMutation({
        mutationKey: journalOptions.queryKey,
        mutationFn: deleteJournal
    })

    return (
        <Delete
            title="Supprimer le journal ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                mutation.mutate({ params: { idJournal: props.journal.id } }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(journalOptions.queryKey, (_data) => _data?.filter((journal) => journal.id !== data?.id))
                        toast({ title: "Journal supprimé", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
