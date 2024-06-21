import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadStatement = {
    params: v.Output<typeof auth.statements.get.params>
}

export function readStatement(props: ReadStatement) {
    if (!props.params.idStatement) {
        toast({ title: "Identifiant du poste de compte de résultat manquant" })
        return
    }
    return getAPI({
        path: `/auth/statements/${props.params.idStatement}`,
        schema: auth.statements.get.return,
        message: "Erreur avec la lecture du poste de compte de résultat"
    })
}
