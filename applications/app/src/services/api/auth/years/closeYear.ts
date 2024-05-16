import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type CloseYear = {
    params: v.Output<typeof auth.years.patch.close.params>
}

export function closeYear(props: CloseYear) {
    return patchAPI({
        path: `/auth/years/${props.params.idYear}/close`,
        schema: auth.years.patch.close.return,
        message: "Erreur avec la clôture de l'exercice fiscal"
    })
}
