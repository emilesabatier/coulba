import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
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
            title="Supprimer le compte ?"
            description="Attention, cela supprimera toutes les données et les sous-comptes associés."
            onSubmit={async () => {
                mutation.mutate({ params: { idAccountSheet: props.accountSheet.id } }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountSheetsOptions.queryKey, (oldData) => oldData?.filter((accountSheet) => accountSheet.id !== newData?.id))
                        toast({ title: "Compte supprimé", variant: "success" })
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
