import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteTransaction = {
    params: v.Output<typeof auth.transactions.delete.params>
}

export function deleteTransaction(props: DeleteTransaction) {
    return deleteAPI({
        path: `/auth/transactions/${props.params.idTransaction}`,
        schema: auth.transactions.delete.return,
        message: "Erreur avec la suppression de l'opération"
    })
}
