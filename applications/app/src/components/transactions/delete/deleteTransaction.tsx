import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { deleteTransaction } from "../../../services/api/auth/transactions/deleteTransaction"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteTransaction = {
    transaction: v.Output<typeof auth.transactions.get.return>
    children: ReactElement
}

export function DeleteTransaction(props: DeleteTransaction) {

    const mutation = useMutation({
        mutationKey: transactionsOptions.queryKey,
        mutationFn: deleteTransaction
    })

    return (
        <Delete
            title="Supprimer l'enregistrement ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                mutation.mutate({ params: { idTransaction: props.transaction.id } }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/enregistrements" })
                        toast({ title: "Enregistrement supprimé", variant: "success" })
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
