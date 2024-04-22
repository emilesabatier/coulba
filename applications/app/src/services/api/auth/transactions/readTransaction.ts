import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadTransaction = {
    params: v.Output<typeof auth.transactions.get.params>
}

export function readTransaction(props: ReadTransaction) {
    if (!props.params.idTransaction) {
        toast({ title: "Identifiant de l'enregistrement manquant" })
        return
    }
    return getAPI({
        path: `/auth/transactions/${props.params.idTransaction}`,
        schema: auth.transactions.get.return,
        message: "Erreur avec la lecture de l'enregistrement"
    })
}
