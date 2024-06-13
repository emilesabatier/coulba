import { auth } from "@coulba/schemas/routes"
import { patchAPI } from "../../../fetch/patchAPI"


export function closeYear() {
    return patchAPI({
        path: `/auth/years/close`,
        schema: auth.years.patch.close.return,
        message: "Erreur avec la clôture de l'exercice"
    })
}
