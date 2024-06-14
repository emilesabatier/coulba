import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateStatementRoute } from "../../../routes/auth/configuration/statements/statements/updateStatement.route"
import { router } from "../../../routes/router"
import { statementOptions } from "../../../services/api/auth/statements/statementsOptions"
import { updateStatement } from "../../../services/api/auth/statements/updateStatement"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { StatementCombobox } from "../statementCombobox"


export function UpdateStatementForm() {
    const { idStatement } = useParams({ from: updateStatementRoute.id })
    const statement = useQuery(statementOptions(idStatement))
    const mutation = useMutation({ mutationFn: updateStatement })

    if (statement.isLoading) return <CircularLoader />
    if (statement.isError) return <ErrorMessage message={statement.error.message} />
    if (!statement.data) return null
    return (
        <Form
            validationSchema={auth.statements.put.body}
            defaultValues={statement.data}
            onCancel={() => router.navigate({
                to: "/configuration/compte-de-resultat/lignes/$idStatement",
                params: { idStatement: idStatement }
            })}
            submitLabel="Modifier"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idStatement: idStatement },
                    body: data
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: statementOptions(idStatement).queryKey })
                router.navigate({
                    to: "/configuration/compte-de-resultat/lignes/$idStatement",
                    params: { idStatement: idStatement }
                })
                toast({ title: "Ligne mise à jour", variant: "success" })

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
                        name="idParent"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Compte parent"
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
