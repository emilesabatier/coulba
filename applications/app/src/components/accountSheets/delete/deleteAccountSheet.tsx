import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { deleteAccountSheet } from "../../../services/api/auth/accountSheets/deleteAccountSheet"
import { sheetOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteAccountSheet = {
    accountSheet: v.Output<typeof auth.accountSheets.get.return>
    children: ReactElement
}

export function DeleteAccountSheet(props: DeleteAccountSheet) {
    const mutation = useMutation({ mutationFn: deleteAccountSheet })

    return (
        <Delete
            title="Supprimer ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idAccountSheet: props.accountSheet.id }
                })
                if (!response) return false

                await router.navigate({
                    to: "/configuration/bilan/$idSheet",
                    params: { idSheet: props.accountSheet.idSheet }
                })
                await queryClient.invalidateQueries(sheetOptions(props.accountSheet.idSheet))
                toast({ title: "Données supprimées", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
