import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteStatement = {
    params: v.Output<typeof auth.statements.delete.params>
}

export function deleteStatement(props: DeleteStatement) {
    return deleteAPI({
        path: `/auth/statements/${props.params.idStatement}`,
        schema: auth.statements.delete.return,
        message: "Erreur avec la suppression de la ligne"
    })
}
