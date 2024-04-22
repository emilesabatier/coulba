import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readSheets() {
    return getAPI({
        path: `/auth/sheets`,
        schema: v.array(auth.sheets.get.return),
        message: "Erreur avec la lecture des lignes"
    })
}
