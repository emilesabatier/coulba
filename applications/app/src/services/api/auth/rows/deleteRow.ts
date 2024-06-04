import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type deleteRow = {
    params: v.Output<typeof auth.rows.delete.params>
}

export function deleteRow(props: deleteRow) {
    return deleteAPI({
        path: `/auth/rows/${props.params.idRow}`,
        schema: auth.rows.delete.return,
        message: "Erreur avec la suppression de la ligne"
    })
}
