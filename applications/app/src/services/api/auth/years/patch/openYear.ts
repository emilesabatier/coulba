import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type OpenYear = {
    body: v.Output<typeof auth.years.patch.open.body>
}

export function openYear(props: OpenYear) {
    return patchAPI({
        path: `/auth/years/open`,
        body: props.body,
        schema: auth.years.patch.open.return,
        message: "Erreur avec l'ouverture de l'exercice"
    })
}
