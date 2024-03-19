import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadAttachment = {
    params: v.Output<typeof auth.attachments.get.params>
}

export function readAttachment(props: ReadAttachment) {
    if (!props.params.idAttachment) {
        toast({ title: "Identifiant du fichier manquant" })
        return
    }
    return getAPI({
        path: `/auth/attachments/${props.params.idAttachment}`,
        schema: auth.attachments.get.return,
        message: "Erreur avec la lecture du fichier"
    })
}
