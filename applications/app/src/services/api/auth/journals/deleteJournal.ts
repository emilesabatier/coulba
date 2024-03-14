import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteJournal = {
    params: v.Output<typeof auth.journals.delete.params>
}

export function deleteJournal(props: DeleteJournal) {
    return deleteAPI({
        path: `/auth/journals/${props.params.idJournal}`,
        schema: auth.journals.delete.return,
        message: "Erreur avec la suppression du journal"
    })
}
