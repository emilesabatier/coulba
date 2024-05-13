import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readComputations() {
    return getAPI({
        path: `/auth/computations`,
        schema: v.array(auth.computations.get.return),
        message: "Erreur avec la lecture des opérations"
    })
}
