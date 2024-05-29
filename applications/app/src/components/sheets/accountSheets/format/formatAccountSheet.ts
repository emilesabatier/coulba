import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatAccountSheet(accountSheet: v.Output<typeof auth.accountSheets.get.return>) {
    return `${accountSheet.number} - ${accountSheet.label}`
}
