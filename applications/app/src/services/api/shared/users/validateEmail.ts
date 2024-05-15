import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"
import { shared } from "@coulba/schemas/routes"


type ValidateEmail = {
    body: v.Output<typeof shared.users.patch.validateEmail.body>
}

export function validateEmail(props: ValidateEmail) {
    return patchAPI({
        path: `/shared/users/validate-email`,
        body: props.body,
        schema: shared.users.patch.validateEmail.return,
        message: "Erreur avec la vérification de l'email"
    })
}
