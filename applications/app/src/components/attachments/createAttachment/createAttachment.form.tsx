import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputFile, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { fileSchema } from "@coulba/schemas/components"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { attachmentsOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { createAttachment } from "../../../services/api/auth/attachments/createAttachment"
import { generatePut } from "../../../services/api/auth/services/signedurl/generatePut"
import { Form } from "../../layouts/forms/form"


export function CreateAttachmentForm() {

    const mutation = useMutation({
        mutationKey: attachmentsOptions.queryKey,
        mutationFn: createAttachment
    })

    return (
        <Form
            validationSchema={v.merge([v.pick(auth.attachments.post.body, ["reference", "label"]), v.object({ file: fileSchema })])}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/fichiers" })}
            submitLabel="Ajouter le fichier"
            onSubmit={async (data) => {
                if (!data.file) {
                    toast({ title: "Aucun fichier trouvé", variant: "error" })
                    return false
                }

                const signedUrlResponse = await generatePut({
                    body: {
                        contentType: data.file.type,
                        size: data.file.size
                    }
                })
                if (!signedUrlResponse) return false

                const uploadFileResponse = await (fetch(
                    signedUrlResponse.url,
                    {
                        method: "PUT",
                        body: data.file
                    }
                ).catch(() => {
                    toast({ title: "Le fichier ne peut pas être uploadé", variant: "error" })
                }))
                if (!uploadFileResponse?.ok) return false

                mutation.mutate({
                    body: {
                        reference: data.reference,
                        label: data.label,
                        storageKey: signedUrlResponse.key,
                        type: data.file.type,
                        size: data.file.size
                    }
                }, {
                    onSuccess: (newData) => {
                        queryClient.setQueryData(attachmentsOptions.queryKey, (oldData) => oldData && newData && [...oldData, newData])
                        toast({ title: "Nouveau fichier ajouté", variant: "success" })
                        router.navigate({ to: "/fichiers" })
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
                        name="file"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Fichier"
                                    tooltip="La référence associée au document."
                                    isRequired
                                />
                                <FormControl>
                                    <InputFile
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
