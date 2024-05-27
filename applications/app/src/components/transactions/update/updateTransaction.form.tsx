import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateTransactionRoute } from "../../../routes/auth/app/transactions/updateTransaction.route"
import { router } from "../../../routes/router"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { updateTransaction } from "../../../services/api/auth/transactions/updateTransaction"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { FormBlock } from "../../layouts/forms/formBlock"


export function UpdateTransactionForm() {
    const { idTransaction } = useParams({ from: updateTransactionRoute.id })
    const transaction = useQuery(transactionOptions(idTransaction))

    const mutation = useMutation({
        mutationKey: transactionOptions(idTransaction).queryKey,
        mutationFn: updateTransaction
    })

    if (transaction.isLoading) return <CircularLoader />
    if (transaction.isError) return <ErrorMessage message={transaction.error.message} />
    if (!transaction.data) return null
    return (
        <Form
            validationSchema={auth.transactions.post.body}
            defaultValues={transaction.data}
            onCancel={() => {
                if (!transaction.data) return null
                router.navigate({
                    to: "/operations/$idTransaction",
                    params: { idTransaction: idTransaction }
                })
            }}
            submitLabel="Modifier l'opération"
            onSubmit={async (data) => {
                mutation.mutate({ params: { idTransaction: idTransaction }, body: data }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/operations/$idTransaction",
                            params: { idTransaction: idTransaction }
                        })
                        toast({ title: "Opération mise à jour", variant: "success" })
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
