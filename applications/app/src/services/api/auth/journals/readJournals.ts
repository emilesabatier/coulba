import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readJournals() {
    return getAPI({
        path: `/auth/journals`,
        schema: v.array(auth.journals.get.return),
        message: "Erreur avec la lecture des journaux"
    })
}
