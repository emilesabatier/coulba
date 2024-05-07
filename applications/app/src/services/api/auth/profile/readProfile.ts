import { auth } from "@coulba/schemas/routes"
import { getAPI } from "../../fetch/getAPI"


export function readProfile() {
    return getAPI({
        path: `/auth/profile`,
        schema: auth.users.get.return,
        message: "Erreur avec la lecture du profil"
    })
}
