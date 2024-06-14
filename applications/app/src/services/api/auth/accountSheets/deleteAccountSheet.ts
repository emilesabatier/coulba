import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteAccountSheet = {
    params: v.Output<typeof auth.accountSheets.delete.params>
}

export function deleteAccountSheet(props: DeleteAccountSheet) {
    return deleteAPI({
        path: `/auth/account-sheets/${props.params.idAccountSheet}`,
        schema: auth.accountSheets.delete.return,
        message: "Erreur avec la suppression du lien entre compte et bilan"
    })
}
