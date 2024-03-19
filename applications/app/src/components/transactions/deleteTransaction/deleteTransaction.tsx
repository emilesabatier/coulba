import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { deleteTransaction } from "../../../services/api/auth/transactions/deleteTransaction"
import { Delete } from "../../layouts/actions/delete"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionOptions"


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
                    onSuccess: (data) => {
                        queryClient.setQueryData(transactionsOptions.queryKey, (_data) => _data?.filter((transaction) => transaction.id !== data?.id))
                        toast({ title: "Enregistrement supprimé", variant: "success" })
                        return true
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
