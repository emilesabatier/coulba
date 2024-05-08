import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type ValidateTransaction = {
    params: v.Output<typeof auth.transactions.patch.validate.params>
}

export function validateTransaction(props: ValidateTransaction) {
    return patchAPI({
        path: `/auth/transactions/${props.params.idTransaction}/validate`,
        schema: auth.transactions.patch.validate.return,
        message: "Erreur avec la validation de l'enregistrement"
    })
}
