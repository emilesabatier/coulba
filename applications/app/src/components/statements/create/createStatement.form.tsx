import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputPrice, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createStatement } from "../../../services/api/auth/statements/createStatement"
import { statementsOptions } from "../../../services/api/auth/statements/statementsOptions"
import { Form } from "../../layouts/forms/form"
import { StatementCombobox } from "../statementCombobox"


export function CreateStatementForm() {
    const mutation = useMutation({ mutationFn: createStatement })

    return (
        <Form
            validationSchema={auth.statements.post.body}
            defaultValues={{
                addedNetAmount: 0
            }}
            onCancel={() => router.navigate({ to: "/configuration/compte-de-resultat/postes" })}
            submitLabel="Ajouter"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(statementsOptions)
                router.navigate({
                    to: "/configuration/compte-de-resultat/postes/$idStatement",
                    params: { idStatement: response.id }
                })
                toast({ title: "Nouveau poste ajouté", variant: "success" })

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
                                    tooltip="Le numéro qui définit l'ordre du poste."
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
                    <FormField
                        control={form.control}
                        name="idParent"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Poste parent"
                                    tooltip="Le poste parent du poste créé."
                                />
                                <FormControl>
                                    <StatementCombobox
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
                        name="addedNetAmount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Montant net à ajouter"
                                    tooltip="Le montant net à ajouter."
                                />
                                <FormControl>
                                    <InputPrice
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
