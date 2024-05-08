import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"



export function readUsers() {
    return getAPI({
        path: `/auth/users`,
        schema: v.array(auth.users.get.return),
        message: "Erreur avec la lecture des utilisateurs"
    })
}
