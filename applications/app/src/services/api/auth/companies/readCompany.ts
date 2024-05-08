import { auth } from "@coulba/schemas/routes"
import { getAPI } from "../../fetch/getAPI"



export function readCompany() {
    return getAPI({
        path: `/auth/companies`,
        schema: auth.companies.get.return,
        message: "Erreur avec la lecture de la société"
    })
}
