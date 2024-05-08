import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


export type SignIn = {
    body: v.Output<typeof shared.sessions.patch.signIn.body>
}

export function signIn(props: SignIn) {
    return patchAPI({
        path: `/shared/sessions/sign-in`,
        body: props.body,
        schema: shared.sessions.patch.signIn.return,
        message: "Erreur avec la connexion"
    })
}
