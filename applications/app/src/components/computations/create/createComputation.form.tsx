import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { computationsOptions } from "../../../services/api/auth/computations/computationsOptions"
import { createComputation } from "../../../services/api/auth/computations/createComputation"
import { Form } from "../../layouts/forms/form"


export function CreateComputationForm() {

    const mutation = useMutation({
        mutationKey: computationsOptions.queryKey,
        mutationFn: createComputation
    })

    return (
        <Form
            validationSchema={auth.computations.post.body}
            defaultValues={{}}
            cancelLabel="Retour"
            onCancel={() => router.navigate({ to: "/configuration/compte-de-resultat" })}
            submitLabel="Ajouter l'opération"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/configuration/compte-de-resultat" })
                        toast({ title: "Nouvelle opération ajoutée", variant: "success" })
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
                </Fragment>
            )}
        </Form>
    )
}
