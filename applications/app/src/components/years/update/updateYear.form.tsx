import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateYearRoute } from "../../../routes/auth/app/configuration/years/updateYear.route"
import { router } from "../../../routes/router"
import { updateYear } from "../../../services/api/auth/years/updateYear"
import { yearOptions, yearsOptions } from "../../../services/api/auth/years/yearsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"


export function UpdateYearForm() {
    const { idYear } = useParams({ from: updateYearRoute.id })
    const year = useQuery(yearOptions(idYear))

    const mutation = useMutation({
        mutationKey: yearsOptions.queryKey,
        mutationFn: updateYear
    })

    if (year.isLoading) return <CircularLoader />
    if (year.isError) return <ErrorMessage message={year.error.message} />
    if (!year.data) return null
    return (
        <Form
            validationSchema={auth.years.put.body}
            defaultValues={year.data}
            cancelLabel="Retour aux exercices"
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel="Modifier l'exercice"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idYear: idYear },
                    body: data
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/configuration/exercices" })
                        toast({ title: "Exercice mis à jour", variant: "success" })
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
                </Fragment>
            )}
        </Form>
    )
}
