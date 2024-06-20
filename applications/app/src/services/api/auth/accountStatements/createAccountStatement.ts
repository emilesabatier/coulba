import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateAccountStatement = {
    body: v.Output<typeof auth.accountStatements.post.body>
}

export function createAccountStatement(props: CreateAccountStatement) {
    return postAPI({
        path: `/auth/account-statements`,
        body: props.body,
        schema: auth.accountStatements.post.return,
        message: "Erreur avec l'ajout du lien entre compte et poste de compte de résultat"
    })
}
