import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteSheet = {
    params: v.Output<typeof auth.sheets.delete.params>
}

export function deleteSheet(props: DeleteSheet) {
    return deleteAPI({
        path: `/auth/sheets/${props.params.idSheet}`,
        schema: auth.sheets.delete.return,
        message: "Erreur avec la suppression de la ligne"
    })
}
