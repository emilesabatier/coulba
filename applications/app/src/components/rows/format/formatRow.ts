import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatRow(row: v.Output<typeof auth.rows.get.return>) {
    return row.label
}
