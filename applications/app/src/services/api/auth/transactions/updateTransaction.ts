import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateTransaction = {
    params: v.Output<typeof auth.transactions.put.params>
    body: v.Output<typeof auth.transactions.put.body>
}

export function updateTransaction(props: UpdateTransaction) {
    return putAPI({
        path: `/auth/transactions/${props.params.idTransaction}`,
        body: props.body,
        schema: auth.transactions.put.return,
        message: "Erreur avec la modification de l'opération"
    })
}
