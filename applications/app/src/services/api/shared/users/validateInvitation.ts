import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type ValidateInvitation = {
    body: v.Output<typeof shared.users.patch.validateInvitation.body>
}

export function validateInvitation(props: ValidateInvitation) {
    return patchAPI({
        path: `/shared/users/validate-invitation`,
        body: props.body,
        schema: shared.users.patch.validateInvitation.return,
        message: "Erreur avec la vérification de l'invitation"
    })
}
