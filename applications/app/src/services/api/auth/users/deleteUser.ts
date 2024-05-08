import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteUser = {
    params: v.Output<typeof auth.users.delete.params>
}

export function deleteUser(props: DeleteUser) {
    return deleteAPI({
        path: `/auth/users/${props.params.idUser}`,
        schema: auth.users.delete.return,
        message: "Erreur avec la suppression de l'accès utilisateur"
    })
}
