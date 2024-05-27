import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatRecord(record: v.Output<typeof auth.records.get.return>) {
    return record.label
}
