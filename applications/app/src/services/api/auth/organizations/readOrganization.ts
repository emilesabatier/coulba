import { auth } from "@coulba/schemas/routes"
import { getAPI } from "../../fetch/getAPI"



export function readOrganization() {
    return getAPI({
        path: `/auth/organizations`,
        schema: auth.organizations.get.return,
        message: "Erreur avec la lecture de l'organisation"
    })
}
