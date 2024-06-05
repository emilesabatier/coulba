import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputSelect, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { accountOptions, accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { updateAccount } from "../../../services/api/auth/accounts/updateAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { AccountCombobox } from "../accountCombobox"
import { systemOptions } from "../systemOptions"
import { updateAccountRoute } from "../../../routes/auth/configuration/accounts/updateAccount.route"


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
            onCancel={() => router.navigate({
                to: "/configuration/comptes/$idAccount",
                params: { idAccount: idAccount }
            })}
            submitLabel="Modifier le compte"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idAccount: idAccount },
                    body: data
                }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountsOptions.queryKey, (oldData) => oldData && newData && [...oldData.filter((account) => account.id !== newData.id), newData])
                        router.navigate({
                            to: "/configuration/comptes/$idAccount",
                            params: { idAccount: idAccount }
                        })
                        toast({ title: "Compte mis à jour", variant: "success" })
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
                    <FormField
                        control={form.control}
                        name="system"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Système minimal"
                                    tooltip="Système minimal auquel appartient le compte."
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={systemOptions}
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
