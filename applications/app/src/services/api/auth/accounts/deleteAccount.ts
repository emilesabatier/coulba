import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteAccount = {
    params: v.Output<typeof auth.accounts.delete.params>
}

export function deleteAccount(props: DeleteAccount) {
    return deleteAPI({
        path: `/auth/accounts/${props.params.idAccount}`,
        schema: auth.accounts.delete.return,
        message: "Erreur avec la suppression du compte"
    })
}
