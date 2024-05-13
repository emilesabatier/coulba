import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadComputation = {
    params: v.Output<typeof auth.computations.get.params>
}

export function readComputation(props: ReadComputation) {
    if (!props.params.idComputation) {
        toast({ title: "Identifiant de la ligne manquant" })
        return
    }
    return getAPI({
        path: `/auth/computations/${props.params.idComputation}`,
        schema: auth.computations.get.return,
        message: "Erreur avec la lecture de l'opération"
    })
}
