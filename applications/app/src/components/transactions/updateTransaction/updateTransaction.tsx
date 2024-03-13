import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { useCurrentYear } from "../../../contexts/currentYear/useCurrentYear"
import { queryClient } from "../../../contexts/state/queryClient"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionOptions"
import { updateTransaction } from "../../../services/api/auth/transactions/updateTransaction"
import { Update } from "../../layouts/actions/update"
import { UpdateTransactionForm } from "./updateTransaction.form"



type UpdateTransaction = {
    children: ReactElement
}

export function UpdateTransaction(props: UpdateTransaction) {
    const currentYear = useCurrentYear()

    const mutation = useMutation({
        mutationKey: transactionOptions.queryKey,
        mutationFn: updateTransaction
    })

    if (!currentYear.data) return null
    return (
        <Update
            triggerElement={props.children}
            title="Ajouter un enregistrement"
            submitLabel="Ajouter"
            defaultValues={{
                idYear: currentYear.data.id,
                date: new Date().toISOString()
            }}
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(transactionOptions.queryKey, (oldData) => oldData && data && [data, ...oldData])
                        toast({ title: "Nouvel enregistrement ajouté", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.transactions.post.body}
            children={<UpdateTransactionForm />}
        />
    )
}
