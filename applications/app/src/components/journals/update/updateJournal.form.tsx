import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateJournalRoute } from "../../../routes/auth/configuration/journals/updateJournal.route"
import { router } from "../../../routes/router"
import { journalOptions, journalsOptions } from "../../../services/api/auth/journals/journalsOptions"
import { updateJournal } from "../../../services/api/auth/journals/updateJournal"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"


export function UpdateJournalForm() {
    const { idJournal } = useParams({ from: updateJournalRoute.id })
    const journal = useQuery(journalOptions(idJournal))
    const mutation = useMutation({ mutationFn: updateJournal })

    if (journal.isLoading) return <CircularLoader />
    if (journal.isError) return <ErrorMessage message={journal.error.message} />
    if (!journal.data) return null
    return (
        <Form
            validationSchema={auth.journals.put.body}
            defaultValues={journal.data}
            onCancel={() => router.navigate({ to: "/configuration/journaux" })}
            submitLabel="Modifier le journal"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idJournal: idJournal },
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(journalsOptions)
                router.navigate({ to: "/configuration/journaux" })
                toast({ title: "Journal mis à jour", variant: "success" })

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
                                    tooltip="Le libellé qui définit le journal ajouté."
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
                        name="code"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Code"
                                    tooltip="Le code qui sera affiché."
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
