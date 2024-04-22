import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readStatements() {
    return getAPI({
        path: `/auth/statements`,
        schema: v.array(auth.statements.get.return),
        message: "Erreur avec la lecture des lignes"
    })
}
