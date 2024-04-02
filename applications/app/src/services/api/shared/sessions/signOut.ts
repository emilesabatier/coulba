import { shared } from "@coulba/schemas/routes"
import { patchAPI } from "../../fetch/patchAPI"


export function signOut() {
    return patchAPI({
        path: `/shared/sessions/sign-out`,
        schema: shared.sessions.patch.signOut.return,
        message: "Erreur avec la déconnexion"
    })
}
