import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { deleteRow } from "../../../services/api/auth/rows/deleteRow"
import { Delete } from "../../layouts/actions/delete"


type DeleteRow = {
    record: v.Output<typeof auth.records.get.return>
    row: v.Output<typeof auth.rows.get.return>
    children: ReactElement
}

export function DeleteRow(props: DeleteRow) {
    const mutation = useMutation({ mutationFn: deleteRow })

    return (
        <Delete
            title="Supprimer la ligne ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idRow: props.row.id }
                })
                if (!response) return false

                await router.navigate({
                    to: "/ecritures/$idRecord",
                    params: { idRecord: props.record.id }
                })
                await queryClient.invalidateQueries(recordOptions(props.record.id))
                toast({ title: "Ligne supprimée", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
