import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readTransactions() {
    return getAPI({
        path: `/auth/transactions`,
        schema: v.array(auth.transactions.get.return),
        message: "Erreur avec la lecture des enregistrements"
    })
}
