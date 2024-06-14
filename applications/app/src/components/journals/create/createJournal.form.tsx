import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createJournal } from "../../../services/api/auth/journals/createJournal"
import { journalsOptions } from "../../../services/api/auth/journals/journalsOptions"
import { Form } from "../../layouts/forms/form"


export function CreateJournalForm() {
    const mutation = useMutation({ mutationFn: createJournal })

    return (
        <Form
            validationSchema={auth.journals.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/journaux" })}
            submitLabel="Ajouter le journal"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    body: data
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: journalsOptions.queryKey })
                router.navigate({ to: "/configuration/journaux" })
                toast({ title: "Nouveau journal ajouté", variant: "success" })

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
                                    label="codee"
                                    tooltip="L'codee qui sera affiché."
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
