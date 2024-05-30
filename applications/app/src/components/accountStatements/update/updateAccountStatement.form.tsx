import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { accountStatementOptions, accountStatementsOptions } from "../../../services/api/auth/accountStatements/accountStatementsOptions"
import { updateAccountStatement } from "../../../services/api/auth/accountStatements/updateAccountStatement"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { updateAccountStatementRoute } from "../../../routes/auth/app/configuration/statements/statements/accountStatements/updateAccountStatement.route"


export function UpdateAccountStatementForm() {
    const { idStatement, idAccountStatement } = useParams({ from: updateAccountStatementRoute.id })
    const accountStatement = useQuery(accountStatementOptions(idAccountStatement))

    const mutation = useMutation({
        mutationKey: accountStatementsOptions.queryKey,
        mutationFn: updateAccountStatement
    })

    if (accountStatement.isLoading) return <CircularLoader />
    if (accountStatement.isError) return <ErrorMessage message={accountStatement.error.message} />
    if (!accountStatement.data) return null
    return (
        <Form
            validationSchema={auth.accountStatements.put.body}
            defaultValues={accountStatement.data}
            onCancel={() => router.navigate({
                to: "/configuration/compte-de-resultat/lignes/$idStatement/comptes/$idAccountStatement",
                params: {
                    idStatement: idStatement,
                    idAccountStatement: idAccountStatement
                }
            })}
            submitLabel="Modifier"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idAccountStatement: idAccountStatement },
                    body: data
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/configuration/compte-de-resultat/lignes/$idStatement/comptes/$idAccountStatement",
                            params: {
                                idStatement: idStatement,
                                idAccountStatement: idAccountStatement
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
                        name="idAccount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Compte lié"
                                    tooltip="Le compte lié à la ligne du compte de résultat."
                                    isRequired
                                />
                                <FormControl>
                                    <AccountCombobox
                                        value={field.value}
                                        onChange={field.onChange}
                                        autoFocus
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
