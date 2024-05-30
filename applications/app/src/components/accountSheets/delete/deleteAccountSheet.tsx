import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { router } from "../../../routes/router"
import { accountSheetsOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { deleteAccountSheet } from "../../../services/api/auth/accountSheets/deleteAccountSheet"
import { Delete } from "../../layouts/actions/delete"


type DeleteAccountSheet = {
    accountSheet: v.Output<typeof auth.accountSheets.get.return>
    children: ReactElement
}

export function DeleteAccountSheet(props: DeleteAccountSheet) {

    const mutation = useMutation({
        mutationKey: accountSheetsOptions.queryKey,
        mutationFn: deleteAccountSheet
    })

    return (
        <Delete
            title="Supprimer ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                mutation.mutate({ params: { idAccountSheet: props.accountSheet.id } }, {
                    onSuccess: () => {
                        router.navigate({
                            to: "/configuration/bilan/$idSheet",
                            params: { idSheet: props.accountSheet.idSheet }
                        })
                        toast({ title: "Données supprimées", variant: "success" })
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
