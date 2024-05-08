import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadUser = {
    params: v.Output<typeof auth.users.get.params>
}

export function readUser(props: ReadUser) {
    if (!props.params.idUser) {
        toast({ title: "Identifiant de l'utilisateur manquant" })
        return
    }
    return getAPI({
        path: `/auth/users/${props.params.idUser}`,
        schema: auth.users.get.return,
        message: "Erreur avec la lecture de l'utilisateur"
    })
}
