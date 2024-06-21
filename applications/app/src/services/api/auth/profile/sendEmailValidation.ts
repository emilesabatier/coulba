import { auth } from "@coulba/schemas/routes"
import { patchAPI } from "../../fetch/patchAPI"


export function sendEmailValidation() {
    return patchAPI({
        path: `/auth/profile/send-email-validation`,
        schema: auth.profile.patch.sendEmailValidation.return,
        message: "Erreur avec l'envoi de l'email'"
    })
}
