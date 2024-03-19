import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateAccount = {
    body: v.Output<typeof auth.accounts.post.body>
}

export function createAccount(props: CreateAccount) {
    return postAPI({
        path: `/auth/accounts`,
        body: props.body,
        schema: auth.accounts.post.return,
        message: "Erreur avec l'ajout du compte"
    })
}
