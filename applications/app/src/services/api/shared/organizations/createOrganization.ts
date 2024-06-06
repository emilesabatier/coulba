import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateOrganization = {
    body: v.Output<typeof shared.organizations.post.body>
}

export function createOrganization(props: CreateOrganization) {
    return postAPI({
        path: `/shared/organizations`,
        body: props.body,
        schema: shared.organizations.post.return,
        message: "Erreur avec l'inscription"
    })
}
