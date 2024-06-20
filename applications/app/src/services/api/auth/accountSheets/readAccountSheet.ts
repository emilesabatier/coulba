import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadAccountSheet = {
    params: v.Output<typeof auth.accountSheets.get.params>
}

export function readAccountSheet(props: ReadAccountSheet) {
    if (!props.params.idAccountSheet) {
        toast({ title: "Identifiant du lien entre compte et poste de bilan manquant" })
        return
    }
    return getAPI({
        path: `/auth/account-sheets/${props.params.idAccountSheet}`,
        schema: auth.accountSheets.get.return,
        message: "Erreur avec la lecture du lien entre compte et poste de bilan"
    })
}
