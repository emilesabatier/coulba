import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { deleteSheet } from "../../../services/api/auth/sheets/deleteSheet"
import { sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteSheet = {
    sheet: v.Output<typeof auth.sheets.get.return>
    children: ReactElement
}

export function DeleteSheet(props: DeleteSheet) {

    const mutation = useMutation({
        mutationKey: sheetsOptions.queryKey,
        mutationFn: deleteSheet
    })

    return (
        <Delete
            title="Supprimer la ligne ?"
            description="Attention, cela supprimera toutes les données et les sous-lignes associées."
            onSubmit={async () => {
                mutation.mutate({ params: { idSheet: props.sheet.id } }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        toast({ title: "Ligne supprimée", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
