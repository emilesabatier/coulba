import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteRecord = {
    params: v.Output<typeof auth.records.delete.params>
}

export function deleteRecord(props: DeleteRecord) {
    return deleteAPI({
        path: `/auth/records/${props.params.idRecord}`,
        schema: auth.records.delete.return,
        message: "Erreur avec la suppression de l'écriture"
    })
}
