import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatAccount(account: v.Output<typeof auth.accounts.get.return>) {
    return `${account.number} - ${account.label}`
}
