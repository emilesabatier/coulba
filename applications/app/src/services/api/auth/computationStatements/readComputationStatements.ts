import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readComputationStatements() {
    return getAPI({
        path: `/auth/computation-statements`,
        schema: v.array(auth.computationStatements.get.return),
        message: "Erreur avec la lecture des liens entre compte et compte de résultat"
    })
}
