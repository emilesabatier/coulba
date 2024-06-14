import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputSelect, InputSwitch, InputText } from "@coulba/design/inputs"
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
import { accountTypeOptions } from "../accountTypeOptions"


export function CreateAccountForm() {
    const mutation = useMutation({ mutationFn: createAccount })

    return (
        <Form
            validationSchema={auth.accounts.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/comptes" })}
            submitLabel="Ajouter le compte"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    body: data
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: accountsOptions.queryKey })
                router.navigate({
                    to: "/configuration/comptes/$idAccount",
                    params: { idAccount: response.id }
                })
                toast({ title: "Nouveau compte ajouté", variant: "success" })

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
