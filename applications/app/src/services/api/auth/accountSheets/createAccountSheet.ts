import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateAccountSheet = {
    body: v.Output<typeof auth.accountSheets.post.body>
}

export function createAccountSheet(props: CreateAccountSheet) {
    return postAPI({
        path: `/auth/account-sheets`,
        body: props.body,
        schema: auth.accountSheets.post.return,
        message: "Erreur avec l'ajout du lien entre compte et poste de bilan"
    })
}
