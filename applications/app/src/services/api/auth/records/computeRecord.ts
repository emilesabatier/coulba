import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type ComputeRecord = {
    params: v.Output<typeof auth.records.patch.compute.params>
}

export function computeRecord(props: ComputeRecord) {
    return patchAPI({
        path: `/auth/records/${props.params.idRecord}/compute`,
        schema: auth.records.patch.compute.return,
        message: "Erreur avec la simulation de l'écriture"
    })
}
