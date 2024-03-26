import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { transactionOptions, transactionsOptions } from "../../../services/api/auth/transactions/transactionOptions"
import { validateTransaction } from "../../../services/api/auth/transactions/validateTransaction"
import { ConfirmDialog } from "../../layouts/actions/confirmDialog"


type ValidateTransaction = {
    transaction: v.Output<typeof auth.transactions.get.return>
    children: ReactElement
}

export function ValidateTransaction(props: ValidateTransaction) {

    const mutation = useMutation({
        mutationKey: transactionOptions(props.transaction.id).queryKey,
        mutationFn: validateTransaction
    })

    return (
        <ConfirmDialog
            title="Valider l'enregistrement ?"
            description={"Attention, cette action est définitive, vous ne pourrez plus modifier les données."}
            submitLabel="Valider"
            color="success"
            onSubmit={async () => {
                mutation.mutate({ params: { idTransaction: props.transaction.id } }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(transactionsOptions.queryKey, (_data) => _data?.filter((transaction) => transaction.id !== data?.id))
                        router.navigate({ to: "/enregistrements" })
                        toast({ title: "Enregistrement validé", variant: "success" })
                        return true
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
