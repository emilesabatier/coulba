import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputSelect, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateAccountSheetRoute } from "../../../routes/auth/app/configuration/accountSheets/updateAccountSheet.route"
import { router } from "../../../routes/router"
import { accountSheetOptions, accountSheetsOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { updateAccountSheet } from "../../../services/api/auth/accountSheets/updateAccountSheet"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { AccountSheetCombobox } from "../accountSheetCombobox"
import { systemOptions } from "../systemOptions"


export function UpdateAccountSheetForm() {
    const { idAccountSheet } = useParams({ from: updateAccountSheetRoute.id })
    const accountSheet = useQuery(accountSheetOptions(idAccountSheet))

    const mutation = useMutation({
        mutationKey: accountSheetsOptions.queryKey,
        mutationFn: updateAccountSheet
    })

    if (accountSheet.isLoading) return <CircularLoader />
    if (accountSheet.isError) return <ErrorMessage message={accountSheet.error.message} />
    if (!accountSheet.data) return null
    return (
        <Form
            validationSchema={auth.accountSheets.put.body}
            defaultValues={accountSheet.data}
            onCancel={() => router.navigate({
                to: "/configuration/comptes/$idAccountSheet",
                params: { idAccountSheet: idAccountSheet }
            })}
            submitLabel="Modifier le compte"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idAccountSheet: idAccountSheet },
                    body: data
                }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(accountSheetsOptions.queryKey, (oldData) => oldData && newData && [...oldData.filter((accountSheet) => accountSheet.id !== newData.id), newData])
                        router.navigate({
                            to: "/configuration/comptes/$idAccountSheet",
                            params: { idAccountSheet: idAccountSheet }
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
                                    <AccountSheetCombobox
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
