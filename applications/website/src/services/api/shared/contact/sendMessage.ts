import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type SendMessage = {
    body: v.Output<typeof shared.contact.patch.sendMessage.body>
}

export function sendMessage(props: SendMessage) {
    return patchAPI({
        path: `/shared/contact/send-message`,
        body: props.body,
        schema: shared.contact.patch.sendMessage.return,
        message: "Erreur avec l'envoi du message"
    })
}
