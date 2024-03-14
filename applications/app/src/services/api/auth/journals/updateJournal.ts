import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateJournal = {
    params: v.Output<typeof auth.journals.put.params>
    body: v.Output<typeof auth.journals.put.body>
}

export function updateJournal(props: UpdateJournal) {
    return putAPI({
        path: `/auth/journals/${props.params.idJournal}`,
        body: props.body,
        schema: auth.journals.put.return,
        message: "Erreur avec la modification du journal"
    })
}
