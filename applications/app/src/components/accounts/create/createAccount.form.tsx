import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputSelect, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { accountsOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { createAccount } from "../../../services/api/auth/accounts/createAccount"
import { Form } from "../../layouts/forms/form"
import { AccountCombobox } from "../accountCombobox"
import { systemOptions } from "../systemOptions"


export function CreateAccountForm() {

    const mutation = useMutation({
        mutationKey: accountsOptions.queryKey,
        mutationFn: createAccount
    })

    return (
        <Form
            validationSchema={auth.accounts.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/comptes" })}
            submitLabel="Ajouter le compte"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountsOptions.queryKey, (oldData) => oldData && newData && [...oldData, newData])
                        router.navigate({ to: "/configuration/comptes" })
                        toast({ title: "Nouveau compte ajouté", variant: "success" })
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
