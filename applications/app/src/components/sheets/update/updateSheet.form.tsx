import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateSheetRoute } from "../../../routes/auth/app/configuration/sheets/updateSheet.route"
import { router } from "../../../routes/router"
import { sheetOptions, sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { updateSheet } from "../../../services/api/auth/sheets/updateSheet"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { SheetCombobox } from "../sheetCombobox"


export function UpdateSheetForm() {
    const { idSheet } = useParams({ from: updateSheetRoute.id })
    const sheet = useQuery(sheetOptions(idSheet))

    const mutation = useMutation({
        mutationKey: sheetsOptions.queryKey,
        mutationFn: updateSheet
    })

    if (sheet.isLoading) return <CircularLoader />
    if (sheet.isError) return <ErrorMessage message={sheet.error.message} />
    if (!sheet.data) return null
    return (
        <Form
            validationSchema={auth.sheets.put.body}
            defaultValues={sheet.data}
            onCancel={() => router.navigate({ to: "/configuration/bilan" })}
            submitLabel="Modifier la ligne"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idSheet: idSheet },
                    body: data
                }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(sheetsOptions.queryKey, (_data) => _data && data && [..._data.filter((sheet) => sheet.id !== data.id), data])
                        router.navigate({ to: "/configuration/bilan" })
                        toast({ title: "Ligne mise à jour", variant: "success" })
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
                        name="number"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Numéro"
                                    tooltip="Le numéro qui définit l'ordre de la ligne."
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
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Libellé"
                                    isRequired
                                />
                                <FormControl>
                                    <InputText
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
                        name="idSheetParent"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Ligne parent"
                                    tooltip="La ligne parent de la ligne créé."
                                />
                                <FormControl>
                                    <SheetCombobox
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
