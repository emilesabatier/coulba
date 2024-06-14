import { auth } from "@coulba/schemas/routes"
import { blobAPI } from "../../fetch/blobAPI"


export function downloadSheet() {
    return blobAPI({
        path: `/auth/sheets/download`,
        schema: auth.sheets.patch.download.return,
        message: "Erreur avec le téléchargement du bilan"
    })
}
