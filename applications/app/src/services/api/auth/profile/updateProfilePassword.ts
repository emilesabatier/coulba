import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type UpdateProfilePassword = {
    body: v.Output<typeof auth.profile.patch.updatePassword.body>
}

export function updateProfilePassword(props: UpdateProfilePassword) {
    return patchAPI({
        path: `/auth/profile/update-password`,
        body: props.body,
        schema: auth.profile.patch.updatePassword.return,
        message: "Erreur avec la modification du mot de passe"
    })
}
