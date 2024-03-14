import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { accountOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { createAccount } from "../../../services/api/auth/accounts/createAccount"
import { Create } from "../../layouts/actions/create"
import { CreateAccountForm } from "./createAccount.form"



type CreateAccount = {
    children: ReactElement
}

export function CreateAccount(props: CreateAccount) {

    const mutation = useMutation({
        mutationKey: accountOptions.queryKey,
        mutationFn: createAccount
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un compte"
            submitLabel="Ajouter"
            defaultValues={{}}
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountOptions.queryKey, (oldData) => oldData && newData && [...oldData, newData])
                        toast({ title: "Nouveau compte ajouté", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.accounts.post.body}
            children={<CreateAccountForm />}
        />
    )
}
