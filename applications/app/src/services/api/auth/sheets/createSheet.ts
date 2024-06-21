import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateSheet = {
    body: v.Output<typeof auth.sheets.post.body>
}

export function createSheet(props: CreateSheet) {
    return postAPI({
        path: `/auth/sheets`,
        body: props.body,
        schema: auth.sheets.post.return,
        message: "Erreur avec l'ajout du poste de bilan"
    })
}
