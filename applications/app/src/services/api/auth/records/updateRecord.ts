import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateRecord = {
    params: v.Output<typeof auth.records.put.params>
    body: v.Output<typeof auth.records.put.body>
}

export function updateRecord(props: UpdateRecord) {
    return putAPI({
        path: `/auth/records/${props.params.idRecord}`,
        body: props.body,
        schema: auth.records.put.return,
        message: "Erreur avec la modification de l'écriture"
    })
}
