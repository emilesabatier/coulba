import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createTransaction } from "../../../services/api/auth/transactions/createTransaction"
import { transactionsOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { Form } from "../../layouts/forms/form"
import { FormBlock } from "../../layouts/forms/formBlock"


export function CreateTransactionForm() {

    const mutation = useMutation({
        mutationKey: transactionsOptions.queryKey,
        mutationFn: createTransaction
    })

    return (
        <Form
            validationSchema={auth.transactions.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/operations" })}
            submitLabel="Ajouter l'opération"
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (newData) => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/operations/$idTransaction",
                            params: { idTransaction: newData.id }
                        })
                        toast({ title: "Nouvelle opération ajoutée", variant: "success" })
                    }
                })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormBlock>
                        <FormField
                            control={form.control}
                            name="label"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Libellé"
                                        tooltip="Le libellé qui définit l'opération ajoutée."
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
                            name="date"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Date"
                                        tooltip="La date à laquelle l'opération a eu lieu."
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
                    </FormBlock>
                </Fragment>
            )}
        </Form>
    )
}
