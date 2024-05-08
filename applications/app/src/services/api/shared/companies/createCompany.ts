import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { postAPI } from "../../fetch/postAPI"


type CreateCompany = {
    body: v.Output<typeof shared.companies.post.body>
}

export function createCompany(props: CreateCompany) {
    return postAPI({
        path: `/shared/companies`,
        body: props.body,
        schema: shared.companies.post.return,
        message: "Erreur avec l'inscription"
    })
}
