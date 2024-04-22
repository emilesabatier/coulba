import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type GenerateDelete = {
    body: v.Output<typeof auth.services.use.signedUrl.patch.generateDelete.body>
}

export function generateDelete(props: GenerateDelete) {
    return patchAPI({
        path: `/auth/services/signed-url/generate-delete`,
        body: props.body,
        schema: auth.services.use.signedUrl.patch.generateDelete.return,
        message: "Erreur avec la suppression du fichier"
    })
}
