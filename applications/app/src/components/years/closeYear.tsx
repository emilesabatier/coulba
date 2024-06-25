import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react/jsx-runtime"
import * as v from "valibot"
import { CurrentYearContext } from "../../contexts/currentYear/currentYear.context"
import { router } from "../../routes/router"
import { accountsOptions } from "../../services/api/auth/accounts/accountsOptions"
import { journalsOptions } from "../../services/api/auth/journals/journalsOptions"
import { closeYear } from "../../services/api/auth/years/patch/closeYear"
import { settleSheet } from "../../services/api/auth/years/patch/settleSheet"
import { settleStatement } from "../../services/api/auth/years/patch/settleStatement"
import { AccountCombobox } from "../accounts/accountCombobox"
import { JournalCombobox } from "../journals/journalCombobox"
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
            validationSchema={v.object({
                ...auth.years.patch.settleStatement.body.entries,
                ...auth.years.patch.settleSheet.body.entries
            })}
            defaultValues={{
                idJournalClosing: journals.data.find((journal) => journal.code === "OD")?.id,
                idAccountProfit: accounts.data.find((account) => account.number === 120)?.id,
                idAccountLoss: accounts.data.find((account) => account.number === 129)?.id
            }}
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel="Clôturer l'exercice"
            onSubmit={async (data) => {

                // compute result
                const settleStatementResponse = await settleStatement({
                    body: {
                        idJournalClosing: data.idJournalClosing,
                        idAccountProfit: data.idAccountProfit,
                        idAccountLoss: data.idAccountLoss
                    }
                })
                if (!settleStatementResponse) {
                    toast({ title: "Erreur lors du solde des comptes de gestion", variant: "error" })
                    return false
                }
                toast({ title: "Solde des comptes de gestion effectué", variant: "success" })

                // settle sheet
                const settleSheetResponse = await settleSheet({
                    body: {
                        idJournalClosing: data.idJournalClosing
                    }
                })
                if (!settleSheetResponse) {
                    toast({ title: "Erreur lors du solde des comptes de bilan", variant: "error" })
                    return false
                }
                toast({ title: "Solde des comptes de bilan effectué", variant: "success" })

                // close year
                const closeYearResponse = await closeYear()
                if (!closeYearResponse) {
                    toast({ title: "Erreur lors de la clôture de l'exercice", variant: "error" })
                    return false
                }
                toast({ title: "Exercice clôturé", variant: "success" })

                router.navigate({ to: "/configuration/exercices" })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="idJournalClosing"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Journal des écritures de clôture"
                                    tooltip="Le journal dans lequel seront ajoutées les écritures de clôture générées par l'application."
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
                    <FormField
                        control={form.control}
                        name="idAccountProfit"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Compte de résultat (bénéfice)"
                                    tooltip="Le compte qui sera mouvementé en cas de résultat positif (généralement 120)."
                                    isRequired
                                />
                                <FormControl>
                                    <AccountCombobox
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
                        name="idAccountLoss"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Compte de résultat (perte)"
                                    tooltip="Le compte qui sera mouvementé en cas de résultat négatif (généralement 129)."
                                    isRequired
                                />
                                <FormControl>
                                    <AccountCombobox
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
