import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteYear = {
    params: v.Output<typeof auth.years.delete.params>
}

export function deleteYear(props: DeleteYear) {
    return deleteAPI({
        path: `/auth/years/${props.params.idYear}`,
        schema: auth.years.delete.return,
        message: "Erreur avec la suppression de l'exercice"
    })
}
