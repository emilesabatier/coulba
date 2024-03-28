import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadSheet = {
    params: v.Output<typeof auth.sheets.get.params>
}

export function readSheet(props: ReadSheet) {
    if (!props.params.idSheet) {
        toast({ title: "Identifiant de la ligne manquant" })
        return
    }
    return getAPI({
        path: `/auth/sheets/${props.params.idSheet}`,
        schema: auth.sheets.get.return,
        message: "Erreur avec la lecture de la ligne"
    })
}
