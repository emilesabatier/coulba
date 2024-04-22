import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type SendSupportMessage = {
    body: v.Output<typeof auth.profile.patch.sendSupportMessage.body>
}

export function sendSupportMessage(props: SendSupportMessage) {
    return patchAPI({
        path: `/auth/profile/send-support-message`,
        body: props.body,
        schema: auth.profile.patch.sendSupportMessage.return,
        message: "Erreur avec l'envoi du message'"
    })
}
