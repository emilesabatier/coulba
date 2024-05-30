import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { deleteAccount } from "../../../services/api/auth/accounts/deleteAccount"
import { Delete } from "../../layouts/actions/delete"
import { router } from "../../../routes/router"


type DeleteAccount = {
    account: v.Output<typeof auth.accounts.get.return>
    children: ReactElement
}

export function DeleteAccount(props: DeleteAccount) {

    const mutation = useMutation({
        mutationKey: accountsOptions.queryKey,
        mutationFn: deleteAccount
    })

    return (
        <Delete
            title="Supprimer le compte ?"
            description="Attention, cela supprimera toutes les données et les sous-comptes associés."
            onSubmit={async () => {
                mutation.mutate({ params: { idAccount: props.account.id } }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountsOptions.queryKey, (oldData) => oldData?.filter((account) => account.id !== newData?.id))
                        router.navigate({
                            to: "/configuration/comptes"
                        })
                        toast({ title: "Compte supprimé", variant: "success" })
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
