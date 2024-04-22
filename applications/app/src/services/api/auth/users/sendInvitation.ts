import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type SendInvitation = {
    params: v.Output<typeof auth.users.patch.sendInvitation.params>
}

export function sendInvitation(props: SendInvitation) {
    return patchAPI({
        path: `/auth/users/${props.params.idUser}/send-invitation`,
        schema: auth.users.patch.sendInvitation.return,
        message: "Erreur avec l'envoi de l'invitation'"
    })
}
