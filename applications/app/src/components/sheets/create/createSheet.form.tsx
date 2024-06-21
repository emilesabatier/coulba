import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputPrice, InputSelect, InputText } from "@coulba/design/inputs"
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
import { sideOptions } from "../sideOptions"


export function CreateSheetForm() {
    const mutation = useMutation({ mutationFn: createSheet })

    return (
        <Form
            validationSchema={auth.sheets.post.body}
            defaultValues={{
                side: "asset",
                addedGrossAmount: 0,
                addedAllowanceAmount: 0
            }}
            onCancel={() => router.navigate({ to: "/configuration/bilan" })}
            submitLabel="Ajouter"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(sheetsOptions)
                router.navigate({
                    to: "/configuration/bilan/$idSheet",
                    params: { idSheet: response.id }
                })
                toast({ title: "Nouveau poste ajouté", variant: "success" })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="side"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Côté"
                                    tooltip="Le côté du bilan."
                                    isRequired
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={sideOptions}
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
                                    tooltip="Le numéro qui définit l'ordre du poste."
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
