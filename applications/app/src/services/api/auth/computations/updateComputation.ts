import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateComputation = {
    params: v.Output<typeof auth.computations.put.params>
    body: v.Output<typeof auth.computations.put.body>
}

export function updateComputation(props: UpdateComputation) {
    return putAPI({
        path: `/auth/computations/${props.params.idComputation}`,
        body: props.body,
        schema: auth.computations.put.return,
        message: "Erreur avec la modification de l'opération"
    })
}
