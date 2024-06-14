import { auth } from "@coulba/schemas/routes"
import { blobAPI } from "../../fetch/blobAPI"


export function downloadStatement() {
    return blobAPI({
        path: `/auth/statements/download`,
        schema: auth.statements.patch.download.return,
        message: "Erreur avec le téléchargement du compte de résultat"
    })
}
