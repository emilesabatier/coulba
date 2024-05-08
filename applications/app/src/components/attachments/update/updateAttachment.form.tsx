import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateAttachmentRoute } from "../../../routes/auth/app/attachments/updateAttachment.route"
import { router } from "../../../routes/router"
import { attachmentOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { updateAttachment } from "../../../services/api/auth/attachments/updateAttachment"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"



export function UpdateAttachmentForm() {
    const { idAttachment } = useParams({ from: updateAttachmentRoute.id })
    const attachment = useQuery(attachmentOptions(idAttachment))

    const mutation = useMutation({
        mutationKey: attachmentOptions(idAttachment).queryKey,
        mutationFn: updateAttachment
    })

    if (attachment.isLoading) return <CircularLoader />
    if (attachment.isError) return <ErrorMessage message={attachment.error.message} />
    if (!attachment.data) return null
    return (
        <Form
            validationSchema={auth.attachments.put.body}
            defaultValues={attachment.data}
            cancelLabel="Retour"
            onCancel={() => {
                if (!attachment.data) return null
                router.navigate({ to: "/fichiers/$idAttachment", params: { idAttachment: attachment.data.id } })
            }}
            submitLabel="Modifier le fichier"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idAttachment: idAttachment },
                    body: {
                        reference: data.reference,
                        label: data.label
                    }
                }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        if (!attachment.data) return null
                        router.navigate({ to: "/fichiers/$idAttachment", params: { idAttachment: attachment.data.id } })
                        toast({ title: "Fichier mis à jour", variant: "success" })
                        return true
                    }
                })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="reference"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Référence"
                                    tooltip="La référence associée au document."
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
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Libellé"
                                    tooltip="Afin de mieux décrire le document."
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
                </Fragment>
            )}
        </Form>
    )
}
