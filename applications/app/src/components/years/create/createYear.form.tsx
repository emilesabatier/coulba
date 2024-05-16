import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputSelect, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createYear } from "../../../services/api/auth/years/createYear"
import { yearsOptions } from "../../../services/api/auth/years/yearsOptions"
import { systemOptions } from "../../accounts/systemOptions"
import { Form } from "../../layouts/forms/form"
import { YearCombobox } from "../input/yearCombobox"


export function CreateYearForm() {

    const mutation = useMutation({
        mutationKey: yearsOptions.queryKey,
        mutationFn: createYear
    })

    return (
        <Form
            validationSchema={auth.years.post.body}
            defaultValues={{}}
            cancelLabel="Retour aux exercices"
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel="Ajouter l'exercice"
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/configuration/exercices" })
                        toast({ title: "Nouvel exercice ajouté", variant: "success" })
                    }
                })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Libellé"
                                    tooltip="Le libellé qui définit l'exercice ajoutée."
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
                    <FormField
                        control={form.control}
                        name="startingOn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Date de début"
                                    tooltip="La date à laquelle démarre l'exercice."
                                    isRequired
                                />
                                <FormControl>
                                    <InputDate
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
                        name="endingOn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Date de fin"
                                    tooltip="La date à laquelle finit l'exercice."
                                    isRequired
                                />
                                <FormControl>
                                    <InputDate
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
                        name="system"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Système"
                                    tooltip="Le système pour l'exercice créé: abrégé, de base ou développé."
                                    isRequired
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={systemOptions}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="idPreviousYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Exercice précédent"
                                    tooltip="L'exercice qui précède chronologiquement."
                                    isRequired
                                />
                                <FormControl>
                                    <YearCombobox
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
