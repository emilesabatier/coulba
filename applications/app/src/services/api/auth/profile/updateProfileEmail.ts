import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type UpdateProfileEmail = {
    body: v.Output<typeof auth.profile.patch.updateEmail.body>
}

export function updateProfileEmail(props: UpdateProfileEmail) {
    return patchAPI({
        path: `/auth/profile/update-email`,
        body: props.body,
        schema: auth.profile.patch.updateEmail.return,
        message: "Erreur avec la modification de l'email"
    })
}
