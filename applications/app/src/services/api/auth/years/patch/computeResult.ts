import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type ComputeResult = {
    body: v.Output<typeof auth.years.patch.settleStatement.body>
}

export function settleStatement(props: ComputeResult) {
    return patchAPI({
        path: `/auth/years/settle-statement`,
        body: props.body,
        schema: auth.years.patch.settleStatement.return,
        message: "Erreur avec le calcul du résultat"
    })
}
