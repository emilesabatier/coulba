import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { deleteAccount } from "../../../services/api/auth/accounts/deleteAccount"
import { Delete } from "../../layouts/actions/delete"


type DeleteAccount = {
    account: v.Output<typeof auth.accounts.get.return>
    children: ReactElement
}

export function DeleteAccount(props: DeleteAccount) {
    const mutation = useMutation({ mutationFn: deleteAccount })

    return (
        <Delete
            title="Supprimer le compte ?"
            description="Attention, cela supprimera toutes les données et les sous-comptes associés."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idAccount: props.account.id }
                })
                if (!response) return false

                await router.navigate({ to: "/configuration/comptes" })
                await queryClient.invalidateQueries(accountsOptions)
                toast({ title: "Compte supprimé", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
