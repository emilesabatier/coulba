import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateYear = {
    body: v.Output<typeof auth.years.post.body>
}

export function createYear(props: CreateYear) {
    return postAPI({
        path: `/auth/years`,
        body: props.body,
        schema: auth.years.post.return,
        message: "Erreur avec l'ajout de l'exercice"
    })
}
