import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateSheet = {
    params: v.Output<typeof auth.sheets.put.params>
    body: v.Output<typeof auth.sheets.put.body>
}

export function updateSheet(props: UpdateSheet) {
    return putAPI({
        path: `/auth/sheets/${props.params.idSheet}`,
        body: props.body,
        schema: auth.sheets.put.return,
        message: "Erreur avec la modification de la ligne"
    })
}
