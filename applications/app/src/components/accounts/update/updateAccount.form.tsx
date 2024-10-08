import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputSelect, InputSwitch, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateAccountRoute } from "../../../routes/auth/configuration/accounts/updateAccount.route"
import { router } from "../../../routes/router"
import { accountOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { updateAccount } from "../../../services/api/auth/accounts/updateAccount"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { AccountCombobox } from "../accountCombobox"
import { accountTypeOptions } from "../accountTypeOptions"


export function UpdateAccountForm() {
    const { idAccount } = useParams({ from: updateAccountRoute.id })
    const account = useQuery(accountOptions(idAccount))
    const mutation = useMutation({ mutationFn: updateAccount })

    if (account.isLoading) return <CircularLoader className="m-3" />
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
                const response = await mutation.mutateAsync({
                    params: { idAccount: idAccount },
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(accountOptions(idAccount))
                router.navigate({
                    to: "/configuration/comptes/$idAccount",
                    params: { idAccount: idAccount }
                })
                toast({ title: "Compte mis à jour", variant: "success" })

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
                                        keepAll
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isClass"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Classe/sous-classe ?"
                                    tooltip="Le compte est une classe ou une sous-classe de compte."
                                />
                                <FormControl>
                                    <InputSwitch
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
                        name="isSelectable"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Sélectionnable ?"
                                    tooltip="Le compte est sélectionnable pour les écritures."
                                />
                                <FormControl>
                                    <InputSwitch
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
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Type de compte"
                                    tooltip="Si le compte est de bilan, de gestion ou spécial."
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={accountTypeOptions}
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
