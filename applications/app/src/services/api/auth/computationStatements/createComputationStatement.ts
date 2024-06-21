import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateComputationStatement = {
    body: v.Output<typeof auth.computationStatements.post.body>
}

export function createComputationStatement(props: CreateComputationStatement) {
    return postAPI({
        path: `/auth/computation-statements`,
        body: props.body,
        schema: auth.computationStatements.post.return,
        message: "Erreur avec l'ajout du lien entre calcul et poste de compte de résultat"
    })
}
