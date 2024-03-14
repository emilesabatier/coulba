import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createTransaction } from "../../../services/api/auth/transactions/createTransaction"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionOptions"
import { Create } from "../../layouts/actions/create"
import { CreateTransactionForm } from "./createTransaction.form"



type CreateTransaction = {
    children: ReactElement
}

export function CreateTransaction(props: CreateTransaction) {

    const mutation = useMutation({
        mutationKey: transactionOptions.queryKey,
        mutationFn: createTransaction
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un enregistrement"
            submitLabel="Ajouter"
            defaultValues={{
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
            children={<CreateTransactionForm />}
        />
    )
}
