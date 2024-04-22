import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateAttachment = {
    body: v.Output<typeof auth.attachments.post.body>
}

export function createAttachment(props: CreateAttachment) {
    return postAPI({
        path: `/auth/attachments`,
        body: props.body,
        schema: auth.attachments.post.return,
        message: "Erreur avec l'ajout du fichier"
    })
}
