import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type DuplicateRecord = {
    params: v.Output<typeof auth.records.patch.duplicate.params>
}

export function duplicateRecord(props: DuplicateRecord) {
    return patchAPI({
        path: `/auth/records/${props.params.idRecord}/duplicate`,
        schema: auth.records.patch.duplicate.return,
        message: "Erreur avec la duplication de l'écriture"
    })
}
