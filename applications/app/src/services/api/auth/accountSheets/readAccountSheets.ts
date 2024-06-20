import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


export function readAccountSheets() {
    return getAPI({
        path: `/auth/account-sheets`,
        schema: v.array(auth.accountSheets.get.return),
        message: "Erreur avec la lecture des liens entre compte et poste de bilan"
    })
}
