import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readAttachments() {
    return getAPI({
        path: `/auth/attachments`,
        schema: v.array(auth.attachments.get.return),
        message: "Erreur avec la lecture du fichier"
    })
}
