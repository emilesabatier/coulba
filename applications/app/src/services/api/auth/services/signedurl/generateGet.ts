import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type GenerateGet = {
    body: v.Output<typeof auth.services.use.signedUrl.patch.generateGet.body>
}

export function generateGet(props: GenerateGet) {
    return patchAPI({
        path: `/auth/services/signed-url/generate-get`,
        body: props.body,
        schema: auth.services.use.signedUrl.patch.generateGet.return,
        message: "Erreur avec la récupération du lien du fichier"
    })
}
