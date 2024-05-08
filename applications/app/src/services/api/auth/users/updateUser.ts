import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateUser = {
    params: v.Output<typeof auth.users.put.params>
    body: v.Output<typeof auth.users.put.body>
}

export function updateUser(props: UpdateUser) {
    return putAPI({
        path: `/auth/users/${props.params.idUser}`,
        body: props.body,
        schema: auth.users.put.return,
        message: "Erreur avec la modification de l'utilisateur"
    })
}
