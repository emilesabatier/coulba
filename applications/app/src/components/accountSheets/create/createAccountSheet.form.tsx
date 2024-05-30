import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSelect, InputSwitch } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createAccountSheetRoute } from "../../../routes/auth/app/configuration/sheets/accountSheets/createAccountSheet.route"
import { router } from "../../../routes/router"
import { accountSheetsOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { createAccountSheet } from "../../../services/api/auth/accountSheets/createAccountSheet"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { Form } from "../../layouts/forms/form"
import { flowOptions } from "../flowOptions"


export function CreateAccountSheetForm() {
    const { idSheet } = useParams({ from: createAccountSheetRoute.id })

    const mutation = useMutation({
        mutationKey: accountSheetsOptions.queryKey,
        mutationFn: createAccountSheet
    })

    return (
        <Form
            validationSchema={auth.accountSheets.post.body}
            defaultValues={{
                idSheet: idSheet
            }}
            onCancel={() => router.navigate({
                to: "/configuration/bilan/$idSheet",
                params: { idSheet: idSheet }
            })}
            submitLabel="Ajouter"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/configuration/bilan/$idSheet",
                            params: { idSheet: idSheet }
                        })
                        toast({ title: "Données ajoutées", variant: "success" })
                    }
                })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="idAccount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Compte lié"
                                    tooltip="Le compte lié à la ligne du bilan."
                                    isRequired
                                />
                                <FormControl>
                                    <AccountCombobox
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
                        name="flow"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Flux"
                                    tooltip="Le flux choisi pour compter au bilan."
                                    isRequired
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={flowOptions}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="isAllowance"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Colonne brut ?"
                                    tooltip="Oui si le compte ajoute à la colonne 'Brut' (Actif uniquement)."
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
                </Fragment>
            )}
        </Form>
    )
}
