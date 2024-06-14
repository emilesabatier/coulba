import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadAccountStatement = {
    params: v.Output<typeof auth.accountStatements.get.params>
}

export function readAccountStatement(props: ReadAccountStatement) {
    if (!props.params.idAccountStatement) {
        toast({ title: "Identifiant du lien entre compte et bilan manquant" })
        return
    }
    return getAPI({
        path: `/auth/account-statements/${props.params.idAccountStatement}`,
        schema: auth.accountStatements.get.return,
        message: "Erreur avec la lecture des données"
    })
}
