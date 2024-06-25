import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputPrice, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateSheetRoute } from "../../../routes/auth/configuration/sheets/updateSheet.route"
import { router } from "../../../routes/router"
import { sheetOptions } from "../../../services/api/auth/sheets/sheetsOptions"
import { updateSheet } from "../../../services/api/auth/sheets/updateSheet"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { SheetCombobox } from "../sheetCombobox"


export function UpdateSheetForm() {
    const { idSheet } = useParams({ from: updateSheetRoute.id })
    const sheet = useQuery(sheetOptions(idSheet))
    const mutation = useMutation({ mutationFn: updateSheet })

    if (sheet.isLoading) return <CircularLoader className="m-3" />
    if (sheet.isError) return <ErrorMessage message={sheet.error.message} />
    if (!sheet.data) return null
    return (
        <Form
            validationSchema={auth.sheets.put.body}
            defaultValues={sheet.data}
            onCancel={() => router.navigate({
                to: "/configuration/bilan/$idSheet",
                params: { idSheet: idSheet }
            })}
            submitLabel="Modifier"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idSheet: idSheet },
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(sheetOptions(idSheet))
                router.navigate({
                    to: "/configuration/bilan/$idSheet",
                    params: { idSheet: idSheet }
                })
                toast({ title: "Poste mis à jour", variant: "success" })

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
                                    tooltip="Le numéro qui définit l'ordre du poste."
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
                        name="idParent"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Poste parent"
                                    tooltip="Le poste parent du poste créé."
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
                    {
                        (form.watch("side") === "asset") ? (
                            <Fragment>
                                <FormField
                                    control={form.control}
                                    name="addedGrossAmount"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                label="Montant brut à ajouter"
                                                tooltip="Le montant brut à ajouter."
                                            />
                                            <FormControl>
                                                <InputPrice
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
                                    name="addedAllowanceAmount"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel
                                                label="Montant amortissements et dépréciations à ajouter"
                                                tooltip="Le montant amortissements et dépréciations à ajouter."
                                            />
                                            <FormControl>
                                                <InputPrice
                                                    value={field.value}
                                                    onChange={field.onChange}
                                                />
                                            </FormControl>
                                            <FormError />
                                        </FormItem>
                                    )}
                                />
                            </Fragment>
                        ) : (
                            <FormField
                                control={form.control}
                                name="addedGrossAmount"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Montant net à ajouter"
                                            tooltip="Le montant net à ajouter."
                                        />
                                        <FormControl>
                                            <InputPrice
                                                value={field.value}
                                                onChange={field.onChange}
                                            />
                                        </FormControl>
                                        <FormError />
                                    </FormItem>
                                )}
                            />
                        )
                    }
                </Fragment>
            )}
        </Form>
    )
}
