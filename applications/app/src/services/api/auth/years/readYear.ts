import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadYear = {
    params: v.Output<typeof auth.years.get.params>
}

export function readYear(props: ReadYear) {
    if (!props.params.idYear) {
        toast({ title: "Identifiant de l'exercice manquant" })
        return
    }
    return getAPI({
        path: `/auth/years/${props.params.idYear}`,
        schema: auth.years.get.return,
        message: "Erreur avec la lecture de l'exercice"
    })
}
