import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSelect, InputSwitch } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateAccountSheetRoute } from "../../../routes/auth/configuration/sheets/accountSheets/updateAccountSheet.route"
import { router } from "../../../routes/router"
import { accountSheetOptions } from "../../../services/api/auth/accountSheets/accountSheetsOptions"
import { updateAccountSheet } from "../../../services/api/auth/accountSheets/updateAccountSheet"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { flowOptions } from "../flowOptions"


export function UpdateAccountSheetForm() {
    const { idSheet, idAccountSheet } = useParams({ from: updateAccountSheetRoute.id })
    const accountSheet = useQuery(accountSheetOptions(idAccountSheet))
    const mutation = useMutation({ mutationFn: updateAccountSheet })

    if (accountSheet.isLoading) return <CircularLoader className="m-3" />
    if (accountSheet.isError) return <ErrorMessage message={accountSheet.error.message} />
    if (!accountSheet.data) return null
    return (
        <Form
            validationSchema={auth.accountSheets.put.body}
            defaultValues={accountSheet.data}
            onCancel={() => router.navigate({
                to: "/configuration/bilan/$idSheet/comptes/$idAccountSheet",
                params: {
                    idSheet: idSheet,
                    idAccountSheet: idAccountSheet
                }
            })}
            submitLabel="Modifier"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idAccountSheet: idAccountSheet },
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(accountSheetOptions(idAccountSheet))
                router.navigate({
                    to: "/configuration/bilan/$idSheet/comptes/$idAccountSheet",
                    params: {
                        idSheet: idSheet,
                        idAccountSheet: idAccountSheet
                    }
                })
                toast({ title: "Données mises à jour", variant: "success" })

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
                                    tooltip="Le compte lié au poste du bilan."
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
                                    label="Colonne amortissements et dépréciations ?"
                                    tooltip="Oui si le compte est dans la colonne 'Amortissements et dépréciations' (Actif uniquement)."
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
