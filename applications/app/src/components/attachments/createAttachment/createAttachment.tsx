import { toast } from "@coulba/design/overlays"
import { fileSchema } from "@coulba/schemas/components"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { attachmentOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { createAttachment } from "../../../services/api/auth/attachments/createAttachment"
import { generatePut } from "../../../services/api/auth/services/signedurl/generatePut"
import { Create } from "../../layouts/actions/create"
import { CreateAttachmentForm } from "./createAttachment.form"


type CreateAttachment = {
    children: ReactElement
}

export function CreateAttachment(props: CreateAttachment) {

    const mutation = useMutation({
        mutationKey: attachmentOptions.queryKey,
        mutationFn: createAttachment
    })

    return (
        <Create
            triggerElement={props.children}
            title="Ajouter un document"
            submitLabel="Ajouter"
            defaultValues={{}}
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
                        queryClient.setQueryData(attachmentOptions.queryKey, (oldData) => oldData && newData && [...oldData, newData])
                        toast({ title: "Nouveau document ajouté", variant: "success" })
                        return true
                    }
                })

                return true
            }}
            validationSchema={v.merge([v.pick(auth.attachments.post.body, ["reference", "label"]), v.object({ file: fileSchema })])}
            children={<CreateAttachmentForm />}
        />
    )
}
