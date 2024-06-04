import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { deleteRecord } from "../../../services/api/auth/records/deleteRecord"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteRecord = {
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
}

export function DeleteRecord(props: DeleteRecord) {

    const mutation = useMutation({
        mutationKey: recordsOptions.queryKey,
        mutationFn: deleteRecord
    })

    return (
        <Delete
            title="Supprimer l'écriture ?"
            description="Attention, cela supprimera toutes les données associées."
            onSubmit={async () => {
                mutation.mutate({ params: { idRecord: props.record.id } }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/ecritures" })
                        toast({ title: "Écriture supprimée", variant: "success" })
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
