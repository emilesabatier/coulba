import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readYears() {
    return getAPI({
        path: `/auth/years`,
        schema: v.array(auth.years.get.return),
        message: "Erreur avec la lecture des exercices fiscaux"
    })
}
