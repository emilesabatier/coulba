import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatJournal(journal: v.Output<typeof auth.journals.get.return>) {
    return `${journal.label} (${journal.code})`
}
