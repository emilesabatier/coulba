import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputPrice, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { createRecordRoute } from "../../../routes/auth/app/transactions/records/createRecord.route"
import { router } from "../../../routes/router"
import { createRecord } from "../../../services/api/auth/records/createRecord"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { AttachmentCombobox } from "../../attachments/attachmentCombobox"
import { JournalCombobox } from "../../journals/journalCombobox"
import { Form } from "../../layouts/forms/form"
import { FormBlock } from "../../layouts/forms/formBlock"


export function CreateRecordForm() {
    const { idTransaction } = useParams({ from: createRecordRoute.id })

    const mutation = useMutation({
        mutationKey: recordsOptions.queryKey,
        mutationFn: createRecord
    })

    return (
        <Form
            validationSchema={auth.records.post.body}
            defaultValues={{
                idTransaction: idTransaction
            }}
            onCancel={() => router.navigate({
                to: "/operations/$idTransaction",
                params: { idTransaction: idTransaction }
            })}
            submitLabel="Ajouter l'enregistrement"
            onSubmit={async (data) => {
                mutation.mutate({
                    body: data
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        router.navigate({
                            to: "/operations/$idTransaction",
                            params: { idTransaction: idTransaction }
                        })
                        toast({ title: "Nouvel enregistrement ajouté", variant: "success" })
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
