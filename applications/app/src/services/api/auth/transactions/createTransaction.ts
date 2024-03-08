import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateTransaction = {
    body: v.Output<typeof auth.transactions.post.body>
}

export function createTransaction(props: CreateTransaction) {
    return postAPI({
        path: `/auth/transactions`,
        body: props.body,
        schema: auth.transactions.post.return,
        message: "Erreur avec l'ajout de l'enregistrement"
    })
}
