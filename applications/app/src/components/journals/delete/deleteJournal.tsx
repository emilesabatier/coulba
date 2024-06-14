import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { deleteJournal } from "../../../services/api/auth/journals/deleteJournal"
import { journalsOptions } from "../../../services/api/auth/journals/journalsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteJournal = {
    journal: v.Output<typeof auth.journals.get.return>
    children: ReactElement
}

export function DeleteJournal(props: DeleteJournal) {
    const mutation = useMutation({ mutationFn: deleteJournal })

    return (
        <Delete
            title="Supprimer le journal ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idJournal: props.journal.id }
                })
                if (!response) return false

                await queryClient.invalidateQueries(journalsOptions)
                toast({ title: "Journal supprimé", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
