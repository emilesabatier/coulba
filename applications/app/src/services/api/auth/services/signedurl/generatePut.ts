import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type GeneratePut = {
    body: v.Output<typeof auth.services.use.signedUrl.patch.generatePut.body>
}

export function generatePut(props: GeneratePut) {
    return patchAPI({
        path: `/auth/services/signed-url/generate-put`,
        body: props.body,
        schema: auth.services.use.signedUrl.patch.generatePut.return,
        message: "Erreur avec le stockage du fichier"
    })
}
