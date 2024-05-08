import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


type GenerateApiKey = {
    body: v.Output<typeof auth.companies.patch.generateApiKey.body>
}

export function generateApiKey(props: GenerateApiKey) {
    return patchAPI({
        path: `/auth/companies/generate-api-key`,
        body: props.body,
        schema: auth.companies.patch.generateApiKey.return,
        message: "Erreur avec la génération de la clé API"
    })
}
