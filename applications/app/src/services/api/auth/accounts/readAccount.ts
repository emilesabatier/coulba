import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadAccount = {
    params: v.Output<typeof auth.accounts.get.params>
}

export function readAccount(props: ReadAccount) {
    if (!props.params.idAccount) {
        toast({ title: "Identifiant du compte manquant" })
        return
    }
    return getAPI({
        path: `/auth/accounts/${props.params.idAccount}`,
        schema: auth.accounts.get.return,
        message: "Erreur avec la lecture du compte"
    })
}
