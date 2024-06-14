import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadComputationStatement = {
    params: v.Output<typeof auth.computationStatements.get.params>
}

export function readComputationStatement(props: ReadComputationStatement) {
    if (!props.params.idComputationStatement) {
        toast({ title: "Identifiant du lien entre compte et compte de résultat manquant" })
        return
    }
    return getAPI({
        path: `/auth/computation-statements/${props.params.idComputationStatement}`,
        schema: auth.computationStatements.get.return,
        message: "Erreur avec la lecture du lien entre compte et compte de résultat"
    })
}
