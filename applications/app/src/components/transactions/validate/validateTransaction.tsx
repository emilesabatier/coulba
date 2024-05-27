import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionsOptions"
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
            title="Valider l'opération ?"
            description={"Attention, cette action est définitive et validera tous les enregistrements liés. Vous ne pourrez plus modifier les données."}
            submitLabel="Valider"
            color="success"
            onSubmit={async () => {
                mutation.mutate({ params: { idTransaction: props.transaction.id } }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/operations/$idTransaction",
                            params: { idTransaction: props.transaction.id }
                        })
                        toast({ title: "Opération validée", variant: "success" })
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
