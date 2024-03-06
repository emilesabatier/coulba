import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateRecord = {
    body: v.Output<typeof auth.records.post.body>
}

export function createRecord(props: CreateRecord) {
    return postAPI({
        path: `/auth/records`,
        body: props.body,
        schema: auth.records.post.return,
        message: "Erreur avec l'ajout de l'enregistrement"
    })
}
