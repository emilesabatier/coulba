import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"
import * as v from "valibot"
import { CurrentYearContext } from "../../contexts/currentYear/currentYear.context"
import { router } from "../../routes/router"
import { journalsOptions } from "../../services/api/auth/journals/journalsOptions"
import { openYear } from "../../services/api/auth/years/patch/openYear"
import { JournalCombobox } from "../journals/journalCombobox"
import { ErrorMessage } from "../layouts/errorMessage"
import { Form } from "../layouts/forms/form"


type OpenYear = {
    currentYear: CurrentYearContext
}

export function OpenYear(props: OpenYear) {
    const journals = useQuery(journalsOptions)

    if (!props.currentYear.data) return null
    if (journals.isLoading) return <CircularLoader className="m-3" />
    if (journals.isError) return <ErrorMessage message={journals.error.message} />
    if (!journals.data) return null
    return (
        <Form
            validationSchema={v.object({
                ...auth.years.patch.open.body.entries
            })}
            defaultValues={{
                idJournalOpening: journals.data.find((journal) => journal.code === "AN")?.id
            }}
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel="Reprendre les comptes"
            onSubmit={async (data) => {

                if (props.currentYear.data?.isClosed === true) {
                    toast({ title: "L'exercice est déjà cloturé", variant: "error" })
                    return false
                }

                if (!props.currentYear.data?.idPreviousYear) {
                    toast({ title: "L'exercice n'a pas d'exercice précédent déclaré", variant: "error" })
                    return false
                }

                // compute result
                const openYearResponse = await openYear({
                    body: {
                        idJournalOpening: data.idJournalOpening
                    }
                })
                if (!openYearResponse) {
                    toast({ title: "Erreur lors de la reprise des comptes", variant: "error" })
                    return false
                }
                toast({ title: "Reprise des comptes effectuée", variant: "success" })

                router.navigate({ to: "/configuration/exercices" })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="idJournalOpening"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Journal des écritures d'ouverture"
                                    tooltip="Le journal dans lequel seront ajoutées les écritures d'ouverture générées par l'application."
                                    isRequired
                                />
                                <FormControl>
                                    <JournalCombobox
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
