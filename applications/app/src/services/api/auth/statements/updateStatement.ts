import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateStatement = {
    params: v.Output<typeof auth.statements.put.params>
    body: v.Output<typeof auth.statements.put.body>
}

export function updateStatement(props: UpdateStatement) {
    return putAPI({
        path: `/auth/statements/${props.params.idStatement}`,
        body: props.body,
        schema: auth.statements.put.return,
        message: "Erreur avec la modification de la ligne"
    })
}
