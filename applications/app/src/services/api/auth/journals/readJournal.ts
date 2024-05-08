import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { getAPI } from "../../fetch/getAPI"


type ReadJournal = {
    params: v.Output<typeof auth.journals.get.params>
}

export function readJournal(props: ReadJournal) {
    if (!props.params.idJournal) {
        toast({ title: "Identifiant du journal manquant" })
        return
    }
    return getAPI({
        path: `/auth/journals/${props.params.idJournal}`,
        schema: auth.journals.get.return,
        message: "Erreur avec la lecture du journal"
    })
}
