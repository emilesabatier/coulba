import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateAccount = {
    params: v.Output<typeof auth.accounts.put.params>
    body: v.Output<typeof auth.accounts.put.body>
}

export function updateAccount(props: UpdateAccount) {
    return putAPI({
        path: `/auth/accounts/${props.params.idAccount}`,
        body: props.body,
        schema: auth.accounts.put.return,
        message: "Erreur avec la modification du compte"
    })
}
