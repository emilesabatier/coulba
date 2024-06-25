import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateRecordRoute } from "../../../routes/auth/records/updateRecord.route"
import { router } from "../../../routes/router"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { updateRecord } from "../../../services/api/auth/records/updateRecord"
import { AttachmentCombobox } from "../../attachments/attachmentCombobox"
import { JournalCombobox } from "../../journals/journalCombobox"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"
import { FormBlock } from "../../layouts/forms/formBlock"


export function UpdateRecordForm() {
    const { idRecord } = useParams({ from: updateRecordRoute.id })
    const record = useQuery(recordOptions(idRecord))
    const mutation = useMutation({ mutationFn: updateRecord })

    if (record.isLoading) return <CircularLoader className="m-3" />
    if (record.isError) return <ErrorMessage message={record.error.message} />
    if (!record.data) return null
    return (
        <Form
            validationSchema={auth.records.post.body}
            defaultValues={record.data}
            onCancel={() => {
                if (!record.data) return null
                router.navigate({
                    to: "/ecritures/$idRecord",
                    params: { idRecord: idRecord }
                })
            }}
            submitLabel="Modifier l'écriture"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idRecord: idRecord },
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(recordOptions(idRecord))
                router.navigate({
                    to: "/ecritures/$idRecord",
                    params: { idRecord: idRecord }
                })
                toast({ title: "Écriture mise à jour", variant: "success" })

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
