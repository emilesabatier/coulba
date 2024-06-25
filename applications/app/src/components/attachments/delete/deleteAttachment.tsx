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
    const mutation = useMutation({ mutationFn: deleteAttachment })

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

                const response = await mutation.mutateAsync({
                    params: { idAttachment: props.attachment.id }
                })
                if (!response) return false

                await router.navigate({ to: "/stockage" })
                await queryClient.invalidateQueries(attachmentsOptions)
                toast({ title: "Fichier supprimé", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
