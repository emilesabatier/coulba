import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readRows() {
    return getAPI({
        path: `/auth/rows`,
        schema: v.array(auth.rows.get.return),
        message: "Erreur avec la lecture des lignes"
    })
}
