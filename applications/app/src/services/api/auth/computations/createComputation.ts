import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateComputation = {
    body: v.Output<typeof auth.computations.post.body>
}

export function createComputation(props: CreateComputation) {
    return postAPI({
        path: `/auth/computations`,
        body: props.body,
        schema: auth.computations.post.return,
        message: "Erreur avec l'ajout de l'opération"
    })
}
