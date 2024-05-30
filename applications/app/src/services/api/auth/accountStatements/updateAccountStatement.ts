import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateAccountStatement = {
    params: v.Output<typeof auth.accountStatements.put.params>
    body: v.Output<typeof auth.accountStatements.put.body>
}

export function updateAccountStatement(props: UpdateAccountStatement) {
    return putAPI({
        path: `/auth/account-statements/${props.params.idAccountStatement}`,
        body: props.body,
        schema: auth.accountStatements.put.return,
        message: "Erreur avec la modification des données"
    })
}
