import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputPrice, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateRowRoute } from "../../../routes/auth/records/rows/updateRow.route"
import { router } from "../../../routes/router"
import { rowOptions } from "../../../services/api/auth/rows/rowsOptions"
import { updateRow } from "../../../services/api/auth/rows/updateRow"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { FormBlock } from "../../layouts/forms/formBlock"


export function UpdateRowForm() {
    const { idRecord, idRow } = useParams({ from: updateRowRoute.id })
    const row = useQuery(rowOptions(idRow))
    const mutation = useMutation({ mutationFn: updateRow })

    if (row.isLoading) return <CircularLoader className="m-3" />
    if (row.isError) return <ErrorMessage message={row.error.message} />
    if (!row.data) return null
    return (
        <Form
            validationSchema={auth.rows.post.body}
            defaultValues={row.data}
            onCancel={() => {
                if (!row.data) return null
                router.navigate({
                    to: "/ecritures/$idRecord/lignes/$idRow",
                    params: {
                        idRecord: idRecord,
                        idRow: idRow
                    }
                })
            }}
            submitLabel="Modifier la ligne"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idRow: idRow },
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(rowOptions(idRow))
                router.navigate({
                    to: "/ecritures/$idRecord/lignes",
                    params: {
                        idRecord: idRecord
                    }
                })
                toast({ title: "Ligne mise à jour", variant: "success" })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormBlock>
                        <FormField
                            control={form.control}
                            name="label"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Libellé"
                                        tooltip="Le libellé qui définit l'écriture ajoutée."
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
                    </FormBlock>
                    <FormBlock>
                        <FormField
                            control={form.control}
                            name="idAccount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Compte"
                                        tooltip="Le compte qui est mouvementé par la ligne."
                                        isRequired
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
                        <div className="flex justify-start items-start gap-1">
                            <FormField
                                control={form.control}
                                name="debit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Débit"
                                            tooltip="Le montant du débit si le compte est débiteur."
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
                                name="credit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Crédit"
                                            tooltip="Le montant du crédit si le compte est créditeur."
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
                        </div>
                    </FormBlock>
                </Fragment>
            )}
        </Form>
    )
}
