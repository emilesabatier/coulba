import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { attachmentOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { updateAttachment } from "../../../services/api/auth/attachments/updateAttachment"
import { Update } from "../../layouts/actions/update"
import { UpdateAttachmentForm } from "./updateAttachment.form"


type UpdateAttachment = {
    attachment: v.Output<typeof auth.attachments.get.return>
    children: ReactElement
}

export function UpdateAttachment(props: UpdateAttachment) {

    const mutation = useMutation({
        mutationKey: attachmentOptions.queryKey,
        mutationFn: updateAttachment
    })

    return (
        <Update
            triggerElement={props.children}
            title="Modifier le fichier"
            submitLabel="Modifier"
            defaultValues={props.attachment}
            onSubmit={async (data) => {

                mutation.mutate({
                    params: { idAttachment: props.attachment.id }, body: {
                        reference: data.reference,
                        label: data.label
                    }
                }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(attachmentOptions.queryKey, (_data) => _data && data && [data, ..._data.filter((attachment) => attachment.id !== data.id)])
                        toast({ title: "Fichier mis à jour", variant: "success" })
                        return true
                    }
                })

                return true
            }}
            validationSchema={v.pick(auth.attachments.put.body, ["reference", "label"])}
            children={<UpdateAttachmentForm />}
        />
    )
}
