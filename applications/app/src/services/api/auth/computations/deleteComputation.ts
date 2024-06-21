import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteComputation = {
    params: v.Output<typeof auth.computations.delete.params>
}

export function deleteComputation(props: DeleteComputation) {
    return deleteAPI({
        path: `/auth/computations/${props.params.idComputation}`,
        schema: auth.computations.delete.return,
        message: "Erreur avec la suppression du calcul"
    })
}
