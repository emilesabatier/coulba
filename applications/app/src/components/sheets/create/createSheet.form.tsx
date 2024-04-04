import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createSheet } from "../../../services/api/auth/sheets/createSheet"
import { sheetsOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { Form } from "../../layouts/forms/form"
import { SheetCombobox } from "../sheetCombobox"


export function CreateSheetForm() {

    const mutation = useMutation({
        mutationKey: sheetsOptions.queryKey,
        mutationFn: createSheet
    })

    return (
        <Form
            validationSchema={auth.sheets.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/bilan" })}
            submitLabel="Ajouter la ligne"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(sheetsOptions.queryKey, (oldData) => oldData && newData && [...oldData, newData])
                        router.navigate({ to: "/configuration/bilan" })
                        toast({ title: "Nouvelle ligne ajoutée", variant: "success" })
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
                                        autoFocus
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
