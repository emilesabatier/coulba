import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateAccountRoute } from "../../../routes/auth/app/configuration/accounts/updateAccount.route"
import { router } from "../../../routes/router"
import { accountOptions, accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { updateAccount } from "../../../services/api/auth/accounts/updateAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { AccountCombobox } from "../accountCombobox"


export function UpdateAccountForm() {
    const { idAccount } = useParams({ from: updateAccountRoute.id })
    const account = useQuery(accountOptions(idAccount))

    const mutation = useMutation({
        mutationKey: accountsOptions.queryKey,
        mutationFn: updateAccount
    })

    if (account.isLoading) return <CircularLoader />
    if (account.isError) return <ErrorMessage message={account.error.message} />
    if (!account.data) return null
    return (
        <Form
            validationSchema={auth.accounts.put.body}
            defaultValues={account.data}
            cancelLabel="Retour aux comptes"
            onCancel={() => router.navigate({ to: "/configuration/comptes" })}
            submitLabel="Modifier le compte"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idAccount: idAccount },
                    body: data
                }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(accountsOptions.queryKey, (_data) => _data && data && [..._data.filter((account) => account.id !== data.id), data])
                        router.navigate({ to: "/configuration/comptes" })
                        toast({ title: "Compte mis à jour", variant: "success" })
                        return true
                    }
                })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Libellé"
                                    tooltip="Le libellé qui définit le compte ajouté."
                                    isRequired
                                />
                                <FormControl>
                                    <InputText
                                        value={field.value}
                                        onChange={field.onChange}
                                        autoFocus
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Numéro"
                                    tooltip="Le numéro qui définit le compte ajouté."
                                    isRequired
                                />
                                <FormControl>
                                    <InputInteger
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="idParent"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Compte parent"
                                    tooltip="Le compte parent du compte créé."
                                />
                                <FormControl>
                                    <AccountCombobox
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                </Fragment>
            )}
        </Form>
    )
}
