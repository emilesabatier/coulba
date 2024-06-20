import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateStatement = {
    body: v.Output<typeof auth.statements.post.body>
}

export function createStatement(props: CreateStatement) {
    return postAPI({
        path: `/auth/statements`,
        body: props.body,
        schema: auth.statements.post.return,
        message: "Erreur avec l'ajout du poste de compte de résultat"
    })
}
