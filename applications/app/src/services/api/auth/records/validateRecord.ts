import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type ValidateRecord = {
    params: v.Output<typeof auth.records.patch.validate.params>
}

export function validateRecord(props: ValidateRecord) {
    return patchAPI({
        path: `/auth/records/${props.params.idRecord}/validate`,
        schema: auth.records.patch.validate.return,
        message: "Erreur avec la validation de l'écriture"
    })
}
