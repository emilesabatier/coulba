import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateUser = {
    body: v.Output<typeof auth.users.post.body>
}

export function createUser(props: CreateUser) {
    return postAPI({
        path: `/auth/users`,
        body: props.body,
        schema: auth.users.post.return,
        message: "Erreur avec l'ajout de l'accès utilisateur"
    })
}
