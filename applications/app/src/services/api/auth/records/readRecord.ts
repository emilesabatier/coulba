import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadRecord = {
    params: v.Output<typeof auth.records.get.params>
}

export function readRecord(props: ReadRecord) {
    if (!props.params.idRecord) {
        toast({ title: "Identifiant de l'enregistrement manquant" })
        return
    }
    return getAPI({
        path: `/auth/records/${props.params.idRecord}`,
        schema: auth.records.get.return,
        message: "Erreur avec la lecture de l'enregistrement"
    })
}
