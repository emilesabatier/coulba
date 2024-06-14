import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type ComputeResult = {
    body: v.Output<typeof auth.years.patch.computeResult.body>
}

export function computeResult(props: ComputeResult) {
    return patchAPI({
        path: `/auth/years/compute-result`,
        body: props.body,
        schema: auth.years.patch.computeResult.return,
        message: "Erreur avec le calcul du résultat"
    })
}
