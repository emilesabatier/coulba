import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createRecord } from "../../../services/api/auth/records/createRecord"
import { recordsOptions } from "../../../services/api/auth/records/recordsOptions"
import { AttachmentCombobox } from "../../attachments/attachmentCombobox"
import { JournalCombobox } from "../../journals/journalCombobox"
import { Form } from "../../layouts/forms/form"
import { FormBlock } from "../../layouts/forms/formBlock"


export function CreateRecordForm() {

    const mutation = useMutation({
        mutationKey: recordsOptions.queryKey,
        mutationFn: createRecord
    })

    return (
        <Form
            validationSchema={auth.records.post.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/ecritures" })}
            submitLabel="Ajouter l'écriture"
            onSubmit={async (data) => {
                mutation.mutate({ body: data }, {
                    onSuccess: (newData) => {
                        if (!!newData) {
                            queryClient.invalidateQueries()
                            router.navigate({
                                to: "/ecritures/$idRecord",
                                params: { idRecord: newData.id }
                            })
                            toast({ title: "Nouvelle écriture ajoutée", variant: "success" })
                        }
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
                                        tooltip="Le libellé qui définit l'écriture ajoutée."
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
                                        tooltip="La date à laquelle l'écriture a eu lieu."
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
                                        tooltip="Le journal dans lequel s'inscrit la ligne."
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
                            name="idAttachment"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Pièce justificative"
                                        tooltip="Le fichier pour appuyer la ligne."
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
