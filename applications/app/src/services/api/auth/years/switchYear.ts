import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type SwitchYear = {
    params: v.Output<typeof auth.years.patch.switch.params>
}

export function switchYear(props: SwitchYear) {
    return patchAPI({
        path: `/auth/years/switch/${props.params.idYear}`,
        schema: auth.years.patch.switch.return,
        message: "Erreur avec le changement d'exercice fiscal"
    })
}
