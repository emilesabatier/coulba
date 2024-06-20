import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadSheet = {
    params: v.Output<typeof auth.sheets.get.params>
}

export function readSheet(props: ReadSheet) {
    if (!props.params.idSheet) {
        toast({ title: "Identifiant du poste de bilan manquant" })
        return
    }
    return getAPI({
        path: `/auth/sheets/${props.params.idSheet}`,
        schema: auth.sheets.get.return,
        message: "Erreur avec la lecture du poste de bilan"
    })
}
