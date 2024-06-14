import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { deleteSheet } from "../../../services/api/auth/sheets/deleteSheet"
import { sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteSheet = {
    sheet: v.Output<typeof auth.sheets.get.return>
    children: ReactElement
}

export function DeleteSheet(props: DeleteSheet) {
    const mutation = useMutation({ mutationFn: deleteSheet })

    return (
        <Delete
            title="Supprimer ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idSheet: props.sheet.id }
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: sheetsOptions.queryKey })
                router.navigate({ to: "/configuration/bilan" })
                toast({ title: "Données supprimées", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
