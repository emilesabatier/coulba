import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


export function readAccountStatements() {
    return getAPI({
        path: `/auth/account-statements`,
        schema: v.array(auth.accountStatements.get.return),
        message: "Erreur avec la lecture des liens entre compte et poste de compte de résultat"
    })
}
