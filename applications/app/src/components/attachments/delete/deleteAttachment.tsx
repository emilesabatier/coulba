import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { attachmentsOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { deleteAttachment } from "../../../services/api/auth/attachments/deleteAttachment"
import { generateDelete } from "../../../services/api/auth/services/signedurl/generateDelete"
import { Delete } from "../../layouts/actions/delete"


type DeleteAttachment = {
    attachment: v.Output<typeof auth.attachments.get.return>
    children: ReactElement
}

export function DeleteAttachment(props: DeleteAttachment) {

    const mutation = useMutation({
        mutationKey: attachmentsOptions.queryKey,
        mutationFn: deleteAttachment
    })

    return (
        <Delete
            title="Supprimer le fichier ?"
            description="Attention, cela supprimera définitivement le fichier."
            onSubmit={async () => {
                const signedUrlResponse = await generateDelete({
                    body: { storageKey: props.attachment.storageKey }
                })
                if (!signedUrlResponse) return false

                const uploadPhotoResponse = await (fetch(
                    signedUrlResponse.url,
                    { method: "DELETE" }
                ).catch(() => {
                    toast({ title: "Le fichier ne peut pas être supprimé", variant: "error" })
                }))
                if (!uploadPhotoResponse?.ok) return false

                mutation.mutate({ params: { idAttachment: props.attachment.id } }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(attachmentsOptions.queryKey, (_data) => _data?.filter((attachment) => attachment.id !== data?.id))
                        router.navigate({ to: "/fichiers" })
                        toast({ title: "Fichier supprimé", variant: "success" })
                        return true
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
