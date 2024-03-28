import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatStatement(statement: v.Output<typeof auth.statements.get.return>) {
    return `${statement.number} - ${statement.label}`
}
