import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatSheet(sheet: v.Output<typeof auth.sheets.get.return>) {
    return `${sheet.number} - ${sheet.label}`
}
