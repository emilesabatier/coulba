import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../fetch/patchAPI"


export type ResetPassword = {
    body: v.Output<typeof shared.users.patch.resetPassword.body>
}

export function resetPassword(props: ResetPassword) {
    return patchAPI({
        path: `/shared/users/reset-password`,
        body: props.body,
        schema: shared.users.patch.resetPassword.return,
        message: "Erreur avec le renouvellement du mot de passe"
    })
}
