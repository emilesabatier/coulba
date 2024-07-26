import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"
import * as v from "valibot"
import { CurrentYearContext } from "../../contexts/currentYear/currentYear.context"
import { router } from "../../routes/router"
import { accountsOptions } from "../../services/api/auth/accounts/accountsOptions"
import { journalsOptions } from "../../services/api/auth/journals/journalsOptions"
import { closeYear } from "../../services/api/auth/years/patch/closeYear"
import { ErrorMessage } from "../layouts/errorMessage"
import { Form } from "../layouts/forms/form"


type CloseYear = {
    currentYear: CurrentYearContext
}

export function CloseYear(props: CloseYear) {
    const journals = useQuery(journalsOptions)
    const accounts = useQuery(accountsOptions)

    if (!props.currentYear.data) return null
    if (journals.isLoading || accounts.isLoading) return <CircularLoader className="m-3" />
    if (journals.isError) return <ErrorMessage message={journals.error.message} />
    if (accounts.isError) return <ErrorMessage message={accounts.error.message} />
    if (!journals.data || !accounts.data) return null
    return (
        <Form
            validationSchema={v.object({})}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel={props.currentYear.data.isClosed ? "Ouvrir l'exercice" : "Clôturer l'exercice"}
            onSubmit={async (_data) => {

                // close year
                const closeYearResponse = await closeYear()
                if (!closeYearResponse) {
                    toast({ title: "Erreur lors de la clôture/ouverture de l'exercice", variant: "error" })
                    return false
                }
                if (closeYearResponse.isClosed) {
                    toast({ title: "Exercice clôturé", variant: "success" })
                }
                if (!closeYearResponse.isClosed) {
                    toast({ title: "Exercice ouvert", variant: "success" })
                }

                await props.currentYear.mutate()
                router.navigate({ to: "/configuration/exercices" })
                return true
            }}
        >
            {(_form) => (
                <Fragment>
                    <p>L'exercice est actuellement <b>{props.currentYear.data?.isClosed ? "fermé" : "ouvert"}</b>.</p>
                </Fragment>
            )}
        </Form>
    )
}
