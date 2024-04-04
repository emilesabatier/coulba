import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createStatement } from "../../../services/api/auth/statements/createStatement"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { Form } from "../../layouts/forms/form"
import { StatementCombobox } from "../statementCombobox"


export function CreateStatementForm() {

    const mutation = useMutation({
        mutationKey: statementsOptions.queryKey,
        mutationFn: createStatement
    })

    return (
        <Form
            validationSchema={auth.statements.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/compte-de-resultat" })}
            submitLabel="Ajouter la ligne"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(statementsOptions.queryKey, (oldData) => oldData && newData && [...oldData, newData])
                        router.navigate({ to: "/configuration/compte-de-resultat" })
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
                        name="idStatementParent"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Ligne parent"
                                    tooltip="La ligne parent de la ligne créé."
                                />
                                <FormControl>
                                    <StatementCombobox
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
