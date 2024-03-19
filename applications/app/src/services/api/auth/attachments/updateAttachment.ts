import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateAttachment = {
    params: v.Output<typeof auth.attachments.put.params>
    body: v.Output<typeof auth.attachments.put.body>
}

export function updateAttachment(props: UpdateAttachment) {
    return putAPI({
        path: `/auth/attachments/${props.params.idAttachment}`,
        body: props.body,
        schema: auth.attachments.put.return,
        message: "Erreur avec la modification du fichier"
    })
}
