import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteComputationStatement = {
    params: v.Output<typeof auth.computationStatements.delete.params>
}

export function deleteComputationStatement(props: DeleteComputationStatement) {
    return deleteAPI({
        path: `/auth/computation-statements/${props.params.idComputationStatement}`,
        schema: auth.computationStatements.delete.return,
        message: "Erreur avec la suppression du lien entre compte et compte de résultat"
    })
}
