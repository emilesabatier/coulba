import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadRow = {
    params: v.Output<typeof auth.rows.get.params>
}

export function readRow(props: ReadRow) {
    if (!props.params.idRow) {
        toast({ title: "Identifiant de la ligne manquant" })
        return
    }
    return getAPI({
        path: `/auth/rows/${props.params.idRow}`,
        schema: auth.rows.get.return,
        message: "Erreur avec la lecture de la ligne"
    })
}
