import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { putAPI } from "../../fetch/putAPI"


type UpdateAccountSheet = {
    params: v.Output<typeof auth.accountSheets.put.params>
    body: v.Output<typeof auth.accountSheets.put.body>
}

export function updateAccountSheet(props: UpdateAccountSheet) {
    return putAPI({
        path: `/auth/account-sheets/${props.params.idAccountSheet}`,
        body: props.body,
        schema: auth.accountSheets.put.return,
        message: "Erreur avec la modification du lien entre compte et bilan"
    })
}
