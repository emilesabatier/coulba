import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateProfile = {
    body: v.Output<typeof auth.profile.put.body>
}

export function updateProfile(props: UpdateProfile) {
    return putAPI({
        path: `/auth/profile`,
        body: props.body,
        schema: auth.profile.put.return,
        message: "Erreur avec la modification du profil"
    })
}
