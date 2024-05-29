import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateComputationStatement = {
    params: v.Output<typeof auth.computationStatements.put.params>
    body: v.Output<typeof auth.computationStatements.put.body>
}

export function updateComputationStatement(props: UpdateComputationStatement) {
    return putAPI({
        path: `/auth/computation-statements/${props.params.idComputationStatement}`,
        body: props.body,
        schema: auth.computationStatements.put.return,
        message: "Erreur avec la modification du lien entre compte et compte de résultat"
    })
}
