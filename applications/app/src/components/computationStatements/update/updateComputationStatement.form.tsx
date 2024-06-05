import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSelect } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { computationStatementOptions, computationStatementsOptions } from "../../../services/api/auth/computationStatements/computationStatementsOptions"
import { updateComputationStatement } from "../../../services/api/auth/computationStatements/updateComputationStatements"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { StatementCombobox } from "../../statements/statementCombobox"
import { operationOptions } from "../operationOptions"
import { updateComputationStatementRoute } from "../../../routes/auth/configuration/statements/computations/computationStatements/updateComputationStatement.route"


export function UpdateComputationStatementForm() {
    const { idComputation, idComputationStatement } = useParams({ from: updateComputationStatementRoute.id })
    const computationStatement = useQuery(computationStatementOptions(idComputationStatement))

    const mutation = useMutation({
        mutationKey: computationStatementsOptions.queryKey,
        mutationFn: updateComputationStatement
    })

    if (computationStatement.isLoading) return <CircularLoader />
    if (computationStatement.isError) return <ErrorMessage message={computationStatement.error.message} />
    if (!computationStatement.data) return null
    return (
        <Form
            validationSchema={auth.computationStatements.put.body}
            defaultValues={computationStatement.data}
            onCancel={() => router.navigate({
                to: "/configuration/compte-de-resultat/calculs/$idComputation/lignes/$idComputationStatement",
                params: {
                    idComputation: idComputation,
                    idComputationStatement: idComputationStatement
                }
            })}
            submitLabel="Modifier"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idComputationStatement: idComputationStatement },
                    body: data
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/configuration/compte-de-resultat/calculs/$idComputation/lignes/$idComputationStatement",
                            params: {
                                idComputation: idComputation,
                                idComputationStatement: idComputationStatement
                            }
                        })
                        toast({ title: "Données mises à jour", variant: "success" })
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
