import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateRow = {
    params: v.Output<typeof auth.rows.put.params>
    body: v.Output<typeof auth.rows.put.body>
}

export function updateRow(props: UpdateRow) {
    return putAPI({
        path: `/auth/rows/${props.params.idRow}`,
        body: props.body,
        schema: auth.rows.put.return,
        message: "Erreur avec la modification de la ligne"
    })
}
