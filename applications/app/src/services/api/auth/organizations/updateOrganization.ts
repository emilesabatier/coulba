import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateOrganization = {
    body: v.Output<typeof auth.organizations.put.body>
}

export function updateOrganization(props: UpdateOrganization) {
    return putAPI({
        path: `/auth/organizations`,
        body: props.body,
        schema: auth.organizations.put.return,
        message: "Erreur avec la modification de l'organisation"
    })
}
