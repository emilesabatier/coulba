import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteAttachment = {
    params: v.Output<typeof auth.attachments.delete.params>
}

export function deleteAttachment(props: DeleteAttachment) {
    return deleteAPI({
        path: `/auth/attachments/${props.params.idAttachment}`,
        schema: auth.attachments.delete.return,
        message: "Erreur avec la suppression du fichier"
    })
}
