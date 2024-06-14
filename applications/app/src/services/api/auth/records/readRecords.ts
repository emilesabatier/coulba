import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readRecords() {
    return getAPI({
        path: `/auth/records`,
        schema: v.array(auth.records.get.return),
        message: "Erreur avec la lecture des écritures"
    })
}
