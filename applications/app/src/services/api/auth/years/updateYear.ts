import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateYear = {
    params: v.Output<typeof auth.years.put.params>
    body: v.Output<typeof auth.years.put.body>
}

export function updateYear(props: UpdateYear) {
    return putAPI({
        path: `/auth/years/${props.params.idYear}`,
        body: props.body,
        schema: auth.years.put.return,
        message: "Erreur avec la modification de l'exercice"
    })
}
