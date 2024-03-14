import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { accountOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { updateAccount } from "../../../services/api/auth/accounts/updateAccount"
import { Update } from "../../layouts/actions/update"
import { UpdateAccountForm } from "./updateAccount.form"


type UpdateAccount = {
    account: v.Output<typeof auth.accounts.get.return>
    children: ReactElement
}

export function UpdateAccount(props: UpdateAccount) {

    const mutation = useMutation({
        mutationKey: accountOptions.queryKey,
        mutationFn: updateAccount
    })

    return (
        <Update
            triggerElement={props.children}
            title="Modifier le compte"
            submitLabel="Modifier"
            defaultValues={props.account}
            onSubmit={async (data) => {
                mutation.mutate({ params: { idAccount: props.account.id }, body: data }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountOptions.queryKey, (oldData) => {
                            if (!oldData) return
                            if (!newData) return
                            return oldData.map((account) => {
                                if (account.id === newData.id) return newData
                                return account
                            })
                        })
                        toast({ title: "Compte mis à jour", variant: "success" })
                        return true
                    }
                })
                return true
            }}
            validationSchema={auth.accounts.put.body}
            children={< UpdateAccountForm />}
        />
    )
}
