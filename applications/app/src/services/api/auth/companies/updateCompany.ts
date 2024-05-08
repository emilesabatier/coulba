import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateCompany = {
    body: v.Output<typeof auth.companies.put.body>
}

export function updateCompany(props: UpdateCompany) {
    return putAPI({
        path: `/auth/companies`,
        body: props.body,
        schema: auth.companies.put.return,
        message: "Erreur avec la modification de la société"
    })
}
