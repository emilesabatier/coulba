import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateJournal = {
    body: v.Output<typeof auth.journals.post.body>
}

export function createJournal(props: CreateJournal) {
    return postAPI({
        path: `/auth/journals`,
        body: props.body,
        schema: auth.journals.post.return,
        message: "Erreur avec l'ajout du journal"
    })
}
