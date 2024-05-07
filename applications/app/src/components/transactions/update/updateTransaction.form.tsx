import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDateTime, InputPrice, InputText } from "@coulba/design/inputs"
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
import { AccountCombobox } from "../../accounts/accountCombobox"
import { AttachmentCombobox } from "../../attachments/attachmentCombobox"
import { JournalCombobox } from "../../journals/journalCombobox"
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
            cancelLabel="Retour"
            onCancel={() => {
                if (!transaction.data) return null
                router.navigate({ to: "/enregistrements/$idTransaction", params: { idTransaction: transaction.data.id } })
            }}
            submitLabel="Modifier l'enregistrement"
            onSubmit={async (data) => {
                mutation.mutate({ params: { idTransaction: idTransaction }, body: data }, {
                    onSuccess: () => {
                        if (!transaction.data) return null
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/enregistrements/$idTransaction", params: { idTransaction: transaction.data.id } })
                        toast({ title: "Enregistrement mis à jour", variant: "success" })
                        return true
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
                                        <InputDateTime
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
                            name="idJournal"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Journal"
                                        tooltip="Le journal dans lequel s'inscrit l'enregistrement."
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
                    </FormBlock>
                    <FormBlock>
                        <FormField
                            control={form.control}
                            name="idAccount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Compte"
                                        tooltip="Le compte qui est mouvementé par l'enregistrement."
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
                        <div className="flex justify-start items-start gap-1">
                            <FormField
                                control={form.control}
                                name="debit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Débit"
                                            tooltip="Le montant du débit si le compte est débiteur."
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
                            <FormField
                                control={form.control}
                                name="credit"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Crédit"
                                            tooltip="Le montant du crédit si le compte est créditeur."
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
                        </div>
                    </FormBlock>
                    <FormBlock>
                        <FormField
                            control={form.control}
                            name="idAttachment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Pièce justificative"
                                        tooltip="Le fichier pour appuyer l'enregistrement."
                                    />
                                    <FormControl>
                                        <AttachmentCombobox
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
