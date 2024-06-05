import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSelect } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { computationStatementsOptions } from "../../../services/api/auth/computationStatements/computationStatementsOptions"
import { createComputationStatement } from "../../../services/api/auth/computationStatements/createComputationStatement"
import { Form } from "../../layouts/forms/form"
import { StatementCombobox } from "../../statements/statementCombobox"
import { operationOptions } from "../operationOptions"
import { createComputationStatementRoute } from "../../../routes/auth/configuration/statements/computations/computationStatements/createComputationStatement.route"


export function CreateComputationStatementForm() {
    const { idComputation } = useParams({ from: createComputationStatementRoute.id })

    const mutation = useMutation({
        mutationKey: computationStatementsOptions.queryKey,
        mutationFn: createComputationStatement
    })

    return (
        <Form
            validationSchema={auth.computationStatements.post.body}
            defaultValues={{
                idComputation: idComputation,
                operation: "plus"
            }}
            onCancel={() => router.navigate({
                to: "/configuration/compte-de-resultat/calculs/$idComputation",
                params: { idComputation: idComputation }
            })}
            submitLabel="Ajouter"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/configuration/compte-de-resultat/calculs/$idComputation",
                            params: { idComputation: idComputation }
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
                        name="operation"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Opération"
                                    tooltip="Opération dans le calcul."
                                    isRequired
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={operationOptions}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="idStatement"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Ligne du compte de résultat"
                                    tooltip="La ligne du compte de résultat utilisée dans le calcul."
                                    isRequired
                                />
                                <FormControl>
                                    <StatementCombobox
                                        value={field.value}
                                        onChange={field.onChange}
                                        autoFocus
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
