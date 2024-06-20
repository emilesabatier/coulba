import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { deleteAPI } from "../../fetch/deleteAPI"


type DeleteAccountStatement = {
    params: v.Output<typeof auth.accountStatements.delete.params>
}

export function deleteAccountStatement(props: DeleteAccountStatement) {
    return deleteAPI({
        path: `/auth/account-statements/${props.params.idAccountStatement}`,
        schema: auth.accountStatements.delete.return,
        message: "Erreur avec la suppression du lien entre compte et poste de compte de résultat"
    })
}
