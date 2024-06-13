import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"
import { patchAPI } from "../../../fetch/patchAPI"


type SettleSheet = {
    body: v.Output<typeof auth.years.patch.settleSheet.body>
}

export function settleSheet(props: SettleSheet) {
    return patchAPI({
        path: `/auth/years/settle-sheet`,
        body: props.body,
        schema: auth.years.patch.settleSheet.return,
        message: "Erreur avec la clôture du bilan"
    })
}
