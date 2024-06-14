import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createAccountStatementRoute } from "../../../routes/auth/configuration/statements/statements/accountStatements/createAccountStatement.route"
import { router } from "../../../routes/router"
import { accountStatementsOptions } from "../../../services/api/auth/accountStatements/accountStatementsOptions"
import { createAccountStatement } from "../../../services/api/auth/accountStatements/createAccountStatement"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { Form } from "../../layouts/forms/form"


export function CreateAccountStatementForm() {
    const { idStatement } = useParams({ from: createAccountStatementRoute.id })
    const mutation = useMutation({ mutationFn: createAccountStatement })

    return (
        <Form
            validationSchema={auth.accountStatements.post.body}
            defaultValues={{
                idStatement: idStatement
            }}
            onCancel={() => router.navigate({
                to: "/configuration/compte-de-resultat/lignes/$idStatement",
                params: { idStatement: idStatement }
            })}
            submitLabel="Ajouter"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    body: data
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: accountStatementsOptions.queryKey })
                router.navigate({
                    to: "/configuration/compte-de-resultat/lignes/$idStatement",
                    params: { idStatement: idStatement }
                })
                toast({ title: "Données ajoutées", variant: "success" })

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
