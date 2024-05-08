import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type Activate = {
    body: v.Output<typeof auth.profile.patch.activate.body>
}

export function activate(props: Activate) {
    return patchAPI({
        path: `/auth/profile/activate`,
        body: props.body,
        schema: auth.profile.patch.activate.return,
        message: "Erreur avec l'activation"
    })
}
