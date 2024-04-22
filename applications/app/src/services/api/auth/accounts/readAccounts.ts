import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readAccounts() {
    return getAPI({
        path: `/auth/accounts`,
        schema: v.array(auth.accounts.get.return),
        message: "Erreur avec la lecture des comptes"
    })
}
