import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateRow = {
    body: v.Output<typeof auth.rows.post.body>
}

export function createRow(props: CreateRow) {
    return postAPI({
        path: `/auth/rows`,
        body: props.body,
        schema: auth.rows.post.return,
        message: "Erreur avec l'ajout de la ligne"
    })
}
