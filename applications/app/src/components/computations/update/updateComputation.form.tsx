import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateComputationRoute } from "../../../routes/auth/app/configuration/statements/computations/updateComputation.route"
import { router } from "../../../routes/router"
import { computationOptions, computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { updateComputation } from "../../../services/api/auth/computations/updateComputation"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"


export function UpdateComputationForm() {
    const { idComputation } = useParams({ from: updateComputationRoute.id })
    const computation = useQuery(computationOptions(idComputation))

    const mutation = useMutation({
        mutationKey: computationsOptions.queryKey,
        mutationFn: updateComputation
    })

    if (computation.isLoading) return <CircularLoader />
    if (computation.isError) return <ErrorMessage message={computation.error.message} />
    if (!computation.data) return null
    return (
        <Form
            validationSchema={auth.computations.put.body}
            defaultValues={computation.data}
            cancelLabel="Retour"
            onCancel={() => router.navigate({ to: "/configuration/compte-de-resultat" })}
            submitLabel="Modifier l'opération"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idComputation: idComputation },
                    body: data
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/configuration/compte-de-resultat" })
                        toast({ title: "Opération mise à jour", variant: "success" })
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
                                    tooltip="Le numéro qui définit l'ordre de l'opération."
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
                </Fragment>
            )}
        </Form>
    )
}
